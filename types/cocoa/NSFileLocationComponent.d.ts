/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileLocationComponent<T0 = void, T1 = void, T2 = void> extends NSObject {
    _cloudMetadata<R = unknown>(): R;
    _isUbiquityContainer<R = boolean>(): R;
    iconAsAttributedString<R = unknown>(): R;
    presentableName<R = unknown>(): R;
    containerComponent<R = unknown>(): R;
    name<R = unknown>(): R;
    url<R = unknown>(): R;
    dealloc<R = void>(): R;
    _initWithURL<R = unknown, P0 = unknown>(__initWithURL: P0): R;
  }
  namespace NSFileLocationComponent {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFileLocationComponent>(): R;
      new: <R = NSFileLocationComponent>() => R;
      attributedStringForIcon<R = unknown, P0 = unknown>(_attributedStringForIcon: P0): R;
      leafFileLocationComponentWithURL<R = unknown, P0 = unknown>(_leafFileLocationComponentWithURL: P0): R;
      flushCaches<R = void>(): R;
    }
  }
}

declare const NSFileLocationComponent: cocoa.NSFileLocationComponent.CLASS;
