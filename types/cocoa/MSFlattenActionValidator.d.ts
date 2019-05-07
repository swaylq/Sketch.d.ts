/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlattenActionValidator<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSFlattenActionValidator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFlattenActionValidator>(): R;
      new: <R = MSFlattenActionValidator>() => R;
      hasFlattenablePathInSelection<R = boolean, P0 = unknown>(_hasFlattenablePathInSelection: P0): R;
      isValidForSelectedLayers<R = boolean, P0 = unknown>(_isValidForSelectedLayers: P0): R;
    }
  }
}

declare const MSFlattenActionValidator: cocoa.MSFlattenActionValidator.CLASS;
