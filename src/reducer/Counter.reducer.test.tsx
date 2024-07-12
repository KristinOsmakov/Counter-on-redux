import {CounterReducer, CounterReducerPropsType, maxValueChangeAC, startValueChangeAC} from './Counter.reducer';


let initialState: CounterReducerPropsType;
beforeEach(() => {

});
test('should handle MAX-VALUE-CHANGE action', () => {
    const newState = CounterReducer(initialState, maxValueChangeAC(10));
    expect(newState.maxValueOption).toBe(10);
    expect(newState.startValueOption).toBe(initialState.startValueOption);
});
test('should handle START-VALUE-CHANGE action', () => {
    const newState = CounterReducer(initialState, startValueChangeAC(5));
    expect(newState.startValueOption).toBe(5);
    expect(newState.maxValueOption).toBe(initialState.maxValueOption);
});

