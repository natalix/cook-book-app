import { useInputState } from './useInputState';
import { cleanup } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

// const onBlurSpy = jest.fn();
afterEach(cleanup);

describe('Hook useInputState', () => {
  it('should show value based on initial value', () => {
    const { result } = renderHook(() => useInputState('initial value'));
    const [value] = result.current;

    expect(value).toBe('initial value');
  });

  it('should setValue based on input value', () => {
    const e = { target: { value: 'target' } };
    const { result } = renderHook(() => useInputState('initial value'));
    const [_, handleChange] = result.current;

    act(() => handleChange(e));

    expect(result.current[0]).toBe('target');
  });

  it('should reset input value', () => {
    const { result } = renderHook(() => useInputState('initial value'));
    const [_, __, reset] = result.current;

    act(() => reset());

    expect(result.current[0]).toBe('');
  });
});

// const consumerHandler = jest.fn();
// const onBlurHandler = result.current(consumerHandler);

// onBlurHandler({} as any);

// expect(consumerHandler).toHaveBeenCalledTimes(2);
// expect(onBlurSpy).toHaveBeenCalledTimes(1);
