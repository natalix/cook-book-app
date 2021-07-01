import { useLocalStorageState } from './useLocalStorageState';
import { cleanup } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

afterEach(cleanup);

describe('Hook useLocalStorageState', () => {
  it('should ', () => {
    const { result } = renderHook(() => useLocalStorageState('test_key', []));
    const [_, setState] = result.current;

    act(() => setState([{ name: 'test' }]));
    const val = result.current[0];
    expect(val[0].name).toBe('test');
  });
});
