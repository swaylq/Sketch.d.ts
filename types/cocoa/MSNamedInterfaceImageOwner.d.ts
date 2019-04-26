/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNamedInterfaceImageOwner<T0 = void, T1 = void, T2 = void> extends NSObject, MSInterfaceImageOwnerProtocol {
    cxx_destruct<R = void>(): R;
    initWithImage_cacheOwner<R = unknown, P0 = unknown, P1 = unknown>(_initWithImage: P0, _cacheOwner: P1): R;
    owner<R = unknown>(): R;
    setOwner<R = void, P0 = unknown>(_v: P0): R;
    namedImage<R = NSImage>(): R;
    setNamedImage<R = void, P0 = NSImage>(_v: P0): R;
    cacheOwner<R = unknown>(): R;
    interfaceImageIdentifier<R = NSString>(): R;
  }
  namespace MSNamedInterfaceImageOwner {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSInterfaceImageOwnerProtocol {
      alloc<R = MSNamedInterfaceImageOwner>(): R;
      new: <R = MSNamedInterfaceImageOwner>() => R;
    }
  }
}

declare const MSNamedInterfaceImageOwner: cocoa.MSNamedInterfaceImageOwner.CLASS;
