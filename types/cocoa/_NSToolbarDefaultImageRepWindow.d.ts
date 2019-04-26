/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarDefaultImageRepWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _shouldSuppressRolloversForSegmentedCellInView<R = boolean>(): R;
    _shouldUseTexturedAppearanceForSegmentedCellInView<R = boolean, P0 = unknown>(__shouldUseTexturedAppearanceForSegmentedCellInView: P0): R;
  }
  namespace _NSToolbarDefaultImageRepWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = _NSToolbarDefaultImageRepWindow>(): R;
      new: <R = _NSToolbarDefaultImageRepWindow>() => R;
    }
  }
}
