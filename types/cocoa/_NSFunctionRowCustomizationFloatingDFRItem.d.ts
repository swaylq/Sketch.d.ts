/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowCustomizationFloatingDFRItem<T0 = void, T1 = void, T2 = void> extends _NSFunctionRowCustomizationDFRItem {
    isPending<R = boolean>(): R;
    representedItem<R = NSTouchBarItem>(): R;
    setRepresentedItem<R = void, P0 = NSTouchBarItem>(_v: P0): R;
  }
  namespace _NSFunctionRowCustomizationFloatingDFRItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSFunctionRowCustomizationDFRItem {
      alloc<R = _NSFunctionRowCustomizationFloatingDFRItem>(): R;
      new: <R = _NSFunctionRowCustomizationFloatingDFRItem>() => R;
    }
  }
}
