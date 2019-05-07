/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIndexSpecifier<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
    keyClassDescription<R = unknown>(): R;
    initWithContainerClassDescription_containerSpecifier_key_index<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_initWithContainerClassDescription: P0, _containerSpecifier: P1, _key: P2, _index: P3): R;
    index<R = number>(): R;
    setIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSIndexSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
      alloc<R = NSIndexSpecifier>(): R;
      new: <R = NSIndexSpecifier>() => R;
      _containerAtIndex_traversingBackward_inContainerTree_ofDepth<R = unknown, P0 = number, P1 = boolean, P2 = unknown, P3 = number>(__containerAtIndex: P0, _traversingBackward: P1, _inContainerTree: P2, _ofDepth: P3): R;
    }
  }
}

declare const NSIndexSpecifier: cocoa.NSIndexSpecifier.CLASS;
