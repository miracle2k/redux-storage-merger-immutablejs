'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.isarray');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isfunction');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.isobject');

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = require('lodash.merge');

var _lodash8 = _interopRequireDefault(_lodash7);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (oldState, newState) {
    // Old state is null/undefined? Just assign
    if (oldState === null || oldState === undefined) {
        return newState;
    }

    // Whole state is ImmutableJS? Easiest way to merge
    if ((0, _lodash4['default'])(oldState.mergeDeep)) {
        return oldState.mergeDeep(newState);
    }

    // newState is ImmutableJS? We can safely use fromJS and merge
    if ((0, _lodash4['default'])(newState.mergeDeep)) {
        return (0, _immutable.fromJS)(oldState).mergeDeep(newState);
    }

    // Otherwise we need to carefully merge to avoid deprecated warnings from
    // ImmutableJS see #8. We inspect only the first object level, as this is
    // a common pattern with redux!
    var result = _extends({}, oldState);
    for (var key in newState) {
        if (!newState.hasOwnProperty(key)) {
            continue;
        }
        var value = newState[key];

        // Assign if we don't need to merge at all
        if (!result.hasOwnProperty(key)) {
            result[key] = (0, _lodash6['default'])(value) && !(0, _lodash2['default'])(value) ? (0, _lodash8['default'])({}, value) : value;
            continue;
        }

        var oldValue = result[key];

        if (!!oldValue && (0, _lodash4['default'])(oldValue.mergeDeep)) {
            result[key] = oldValue.mergeDeep(value);
        } else if (!!value && (0, _lodash4['default'])(value.mergeDeep)) {
            if (!oldValue) {
                result[key] == value;
            } else {
                result[key] = (0, _immutable.fromJS)(oldValue).mergeDeep(value);
            }
        } else if ((0, _lodash6['default'])(value) && !(0, _lodash2['default'])(value)) {
            result[key] = (0, _lodash8['default'])({}, oldValue, value);
        } else {
            result[key] = value;
        }
    }

    return result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7cUJBRWUsVUFBQyxRQUFELEVBQVcsUUFBWCxFQUF3Qjs7QUFFbkMsUUFBSSxhQUFhLElBQWIsSUFBcUIsYUFBYSxTQUF0QyxFQUFpRDtBQUM3QyxlQUFPLFFBQVA7QUFDSDs7O0FBR0QsUUFBSSx5QkFBVyxTQUFTLFNBQXBCLENBQUosRUFBb0M7QUFDaEMsZUFBTyxTQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBUDtBQUNIOzs7QUFHRCxRQUFJLHlCQUFXLFNBQVMsU0FBcEIsQ0FBSixFQUFvQztBQUNoQyxlQUFPLHVCQUFPLFFBQVAsRUFBaUIsU0FBakIsQ0FBMkIsUUFBM0IsQ0FBUDtBQUNIOzs7OztBQUtELFFBQU0sc0JBQWMsUUFBZCxDQUFOO0FBQ0EsU0FBSyxJQUFNLEdBQVgsSUFBa0IsUUFBbEIsRUFBNEI7QUFDeEIsWUFBSSxDQUFDLFNBQVMsY0FBVCxDQUF3QixHQUF4QixDQUFMLEVBQW1DO0FBQy9CO0FBQ0g7QUFDRCxZQUFNLFFBQVEsU0FBUyxHQUFULENBQWQ7OztBQUdBLFlBQUksQ0FBQyxPQUFPLGNBQVAsQ0FBc0IsR0FBdEIsQ0FBTCxFQUFpQztBQUM3QixtQkFBTyxHQUFQLElBQWMseUJBQVMsS0FBVCxLQUFtQixDQUFDLHlCQUFRLEtBQVIsQ0FBcEIsR0FDUix5QkFBTSxFQUFOLEVBQVUsS0FBVixDQURRLEdBRVIsS0FGTjtBQUdBO0FBQ0g7O0FBRUQsWUFBTSxXQUFXLE9BQU8sR0FBUCxDQUFqQjs7QUFFQSxZQUFJLENBQUMsQ0FBQyxRQUFGLElBQWMseUJBQVcsU0FBUyxTQUFwQixDQUFsQixFQUFrRDtBQUM5QyxtQkFBTyxHQUFQLElBQWMsU0FBUyxTQUFULENBQW1CLEtBQW5CLENBQWQ7QUFDSCxTQUZELE1BRU8sSUFBSSxDQUFDLENBQUMsS0FBRixJQUFXLHlCQUFXLE1BQU0sU0FBakIsQ0FBZixFQUE0QztBQUMvQyxnQkFBSSxDQUFDLFFBQUwsRUFBZTtBQUNWLHVCQUFPLEdBQVAsS0FBZSxLQUFmO0FBQ0osYUFGRCxNQUVPO0FBQ0gsdUJBQU8sR0FBUCxJQUFjLHVCQUFPLFFBQVAsRUFBaUIsU0FBakIsQ0FBMkIsS0FBM0IsQ0FBZDtBQUNIO0FBQ0osU0FOTSxNQU1BLElBQUkseUJBQVMsS0FBVCxLQUFtQixDQUFDLHlCQUFRLEtBQVIsQ0FBeEIsRUFBd0M7QUFDM0MsbUJBQU8sR0FBUCxJQUFjLHlCQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCLENBQWQ7QUFDSCxTQUZNLE1BRUE7QUFDSCxtQkFBTyxHQUFQLElBQWMsS0FBZDtBQUNIO0FBQ0o7O0FBRUQsV0FBTyxNQUFQO0FBQ0gsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC5pc2FycmF5JztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC5pc2Z1bmN0aW9uJztcbmltcG9ydCBpc09iamVjdCBmcm9tICdsb2Rhc2guaXNvYmplY3QnO1xuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC5tZXJnZSc7XG5pbXBvcnQgeyBmcm9tSlMgfSBmcm9tICdpbW11dGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCAob2xkU3RhdGUsIG5ld1N0YXRlKSA9PiB7XG4gICAgLy8gT2xkIHN0YXRlIGlzIG51bGwvdW5kZWZpbmVkPyBKdXN0IGFzc2lnblxuICAgIGlmIChvbGRTdGF0ZSA9PT0gbnVsbCB8fCBvbGRTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICAvLyBXaG9sZSBzdGF0ZSBpcyBJbW11dGFibGVKUz8gRWFzaWVzdCB3YXkgdG8gbWVyZ2VcbiAgICBpZiAoaXNGdW5jdGlvbihvbGRTdGF0ZS5tZXJnZURlZXApKSB7XG4gICAgICAgIHJldHVybiBvbGRTdGF0ZS5tZXJnZURlZXAobmV3U3RhdGUpO1xuICAgIH1cblxuICAgIC8vIG5ld1N0YXRlIGlzIEltbXV0YWJsZUpTPyBXZSBjYW4gc2FmZWx5IHVzZSBmcm9tSlMgYW5kIG1lcmdlXG4gICAgaWYgKGlzRnVuY3Rpb24obmV3U3RhdGUubWVyZ2VEZWVwKSkge1xuICAgICAgICByZXR1cm4gZnJvbUpTKG9sZFN0YXRlKS5tZXJnZURlZXAobmV3U3RhdGUpO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIGNhcmVmdWxseSBtZXJnZSB0byBhdm9pZCBkZXByZWNhdGVkIHdhcm5pbmdzIGZyb21cbiAgICAvLyBJbW11dGFibGVKUyBzZWUgIzguIFdlIGluc3BlY3Qgb25seSB0aGUgZmlyc3Qgb2JqZWN0IGxldmVsLCBhcyB0aGlzIGlzXG4gICAgLy8gYSBjb21tb24gcGF0dGVybiB3aXRoIHJlZHV4IVxuICAgIGNvbnN0IHJlc3VsdCA9IHsgLi4ub2xkU3RhdGUgfTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdTdGF0ZSkge1xuICAgICAgICBpZiAoIW5ld1N0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3U3RhdGVba2V5XTtcblxuICAgICAgICAvLyBBc3NpZ24gaWYgd2UgZG9uJ3QgbmVlZCB0byBtZXJnZSBhdCBhbGxcbiAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBpc09iamVjdCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpXG4gICAgICAgICAgICAgICAgPyBtZXJnZSh7fSwgdmFsdWUpXG4gICAgICAgICAgICAgICAgOiB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSByZXN1bHRba2V5XTtcblxuICAgICAgICBpZiAoISFvbGRWYWx1ZSAmJiBpc0Z1bmN0aW9uKG9sZFZhbHVlLm1lcmdlRGVlcCkpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gb2xkVmFsdWUubWVyZ2VEZWVwKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICghIXZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUubWVyZ2VEZWVwKSkge1xuICAgICAgICAgICAgaWYgKCFvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9PSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBmcm9tSlMob2xkVmFsdWUpLm1lcmdlRGVlcCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgb2xkVmFsdWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbiJdfQ==