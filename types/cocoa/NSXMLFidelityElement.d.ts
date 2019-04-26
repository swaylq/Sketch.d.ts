/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLFidelityElement<T0 = void, T1 = void, T2 = void> extends NSXMLElement {
    setEndWhitespace<R = void, P0 = unknown>(_setEndWhitespace: P0): R;
    setWhitespace<R = void, P0 = unknown>(_setWhitespace: P0): R;
    fidelity<R = number>(): R;
    setFidelity<R = void, P0 = number>(_setFidelity: P0): R;
  }
  namespace NSXMLFidelityElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXMLElement {
      alloc<R = NSXMLFidelityElement>(): R;
      new: <R = NSXMLFidelityElement>() => R;
    }
  }
}

declare const NSXMLFidelityElement: cocoa.NSXMLFidelityElement.CLASS;
