/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGTransformImporter<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace SVGTransformImporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = SVGTransformImporter>(): R;
      new: <R = SVGTransformImporter>() => R;
      matrixTransformFromComponents<R = unknown, P0 = unknown>(_matrixTransformFromComponents: P0): R;
      rotateTransformFromComponents<R = unknown, P0 = unknown>(_rotateTransformFromComponents: P0): R;
      scaleTransformFromComponents<R = unknown, P0 = unknown>(_scaleTransformFromComponents: P0): R;
      translateTransformFromComponents<R = unknown, P0 = unknown>(_translateTransformFromComponents: P0): R;
      transformFromName_components<R = unknown, P0 = unknown, P1 = unknown>(_transformFromName: P0, _components: P1): R;
      transformFromString<R = unknown, P0 = unknown>(_transformFromString: P0): R;
    }
  }
}

declare const SVGTransformImporter: cocoa.SVGTransformImporter.CLASS;
