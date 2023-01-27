import { renderHook, act } from "@testing-library/react-hooks";
import { useBoolean } from "./index";

describe("use-boolean", () => {
  it("init", () => {
    const { result } = renderHook(() => useBoolean(false));
    expect(result.current.value).toBe(false);

    act(() => result.current.setTrue());

    expect(result.current.value).toBe(true);
  });

  it("setTruly", () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => result.current.setTrue());

    expect(result.current.value).toBe(true);
  });

  it("setFalse", () => {
    const { result } = renderHook(() => useBoolean(true));

    act(() => result.current.setFalse());

    expect(result.current.value).toBe(false);
  });

  it("toggle", () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => result.current.toggle());

    expect(result.current.value).toBe(true);

    act(() => result.current.toggle());
    expect(result.current.value).toBe(false);
  });

  it('update', () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => result.current.update(true));

    expect(result.current.value).toBe(true);

    act(() => result.current.update(false));
    expect(result.current.value).toBe(false);
  })

  it('setValue', () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => result.current.setValue(true));

    expect(result.current.value).toBe(true);

    act(() => result.current.setValue(false));
    expect(result.current.value).toBe(false);
  })
});
