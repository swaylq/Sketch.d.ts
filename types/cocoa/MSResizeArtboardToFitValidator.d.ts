/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResizeArtboardToFitValidator<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSResizeArtboardToFitValidator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSResizeArtboardToFitValidator>(): R;
      new: <R = MSResizeArtboardToFitValidator>() => R;
      isValidForSelectedLayers<R = boolean, P0 = unknown>(_isValidForSelectedLayers: P0): R;
    }
  }
}

declare const MSResizeArtboardToFitValidator: cocoa.MSResizeArtboardToFitValidator.CLASS;
