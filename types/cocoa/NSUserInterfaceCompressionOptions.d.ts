/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceCompressionOptions<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol, NSCodingProtocol {
    description<R = unknown>(): R;
    optionsByAddingOptions<R = unknown, P0 = unknown>(_optionsByAddingOptions: P0): R;
    optionsByRemovingOptions<R = unknown, P0 = unknown>(_optionsByRemovingOptions: P0): R;
    intersectsOptions<R = boolean, P0 = unknown>(_intersectsOptions: P0): R;
    containsOptions<R = boolean, P0 = unknown>(_containsOptions: P0): R;
    identifiers<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithCompressionOptions<R = unknown, P0 = unknown>(_initWithCompressionOptions: P0): R;
    initWithIdentifier<R = unknown, P0 = unknown>(_initWithIdentifier: P0): R;
    empty<R = boolean>(): R;
  }
  namespace NSUserInterfaceCompressionOptions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSUserInterfaceCompressionOptions>(): R;
      new: <R = NSUserInterfaceCompressionOptions>() => R;
      standardOptions<R = unknown>(): R;
      breakEqualWidthsOption<R = unknown>(): R;
      reduceMetricsOption<R = unknown>(): R;
      hideTextOption<R = unknown>(): R;
      hideImagesOption<R = unknown>(): R;
    }
  }
}

declare const NSUserInterfaceCompressionOptions: cocoa.NSUserInterfaceCompressionOptions.CLASS;
