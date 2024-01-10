import { render, screen, renderHook, act} from '@testing-library/react'
import useCounter from './useCounter'

describe('Counter', () => {
    test('renders correctly', () => {
        const {result} = renderHook(useCounter);
        expect(result.current.count).toBe(0)
    })
    test('should take props data and display the same', () => {
        const {result} = renderHook(useCounter, {initialProps: {
            initialCount : 10
        }});
        expect(result.current.count).toBe(10)
    })

    test('should increment the count', () => {
        const {result} = renderHook(useCounter)
        act(() => result.current.increment());
        expect(result.current.count).toBe(1)
    })
    test('should decrement the count', () => {
        const {result} = renderHook(useCounter)
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1)
    })
})