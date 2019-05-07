/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleBlur<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleBlur {
    cropRadius<R = number>(): R;
    migratePropertiesFromV106OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV106OrEarlierWithUnarchiver: P0): R;
    renderBitmapEffects_bounds_parentCoordinateTransform<R = unknown, P0 = unknown, P1 = CGRect, P2 = CGAffineTransform>(_renderBitmapEffects: P0, _bounds: P1, _parentCoordinateTransform: P2): R;
    shouldUseCoreImageForEffect<R = boolean>(): R;
    addFilterWithExporter<R = void, P0 = unknown>(_addFilterWithExporter: P0): R;
    // + MSImmutableStyleBlur(CoreImageEffects): 
    renderBitmapEffects_bounds_parentCoordinateTransform<R = unknown, P0 = unknown, P1 = CGRect, P2 = CGAffineTransform>(_renderBitmapEffects: P0, _bounds: P1, _parentCoordinateTransform: P2): R;
    shouldUseCoreImageForEffect<R = boolean>(): R;
    // + MSImmutableStyleBlur(SVGExporter): 
    addFilterWithExporter<R = void, P0 = unknown>(_addFilterWithExporter: P0): R;
  }
  namespace MSImmutableStyleBlur {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleBlur {
      alloc<R = MSImmutableStyleBlur>(): R;
      new: <R = MSImmutableStyleBlur>() => R;
  
  }
  }
}

declare const MSImmutableStyleBlur: cocoa.MSImmutableStyleBlur.CLASS;
