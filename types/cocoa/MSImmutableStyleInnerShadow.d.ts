/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleInnerShadow<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleInnerShadow, MSColorUserProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSImmutableStyleInnerShadow(SVGExporter): 
    addSVGFilterWithParent_exporter_index<R = void, P0 = unknown, P1 = unknown, P2 = number>(_addSVGFilterWithParent: P0, _exporter: P1, _index: P2): R;
    // + MSImmutableStyleInnerShadow(ColorSource):
    colorUserColorUse<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSImmutableStyleInnerShadow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleInnerShadow, MSColorUserProtocol {
      alloc<R = MSImmutableStyleInnerShadow>(): R;
      new: <R = MSImmutableStyleInnerShadow>() => R;
  
  }
  }
}

declare const MSImmutableStyleInnerShadow: cocoa.MSImmutableStyleInnerShadow.CLASS;
