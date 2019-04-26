/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNamedFidelityNode<T0 = void, T1 = void, T2 = void> extends NSXMLNamedNode {
    setNames<R = void, P0 = unknown>(_setNames: P0): R;
    setRanges<R = void, P0 = unknown>(_setRanges: P0): R;
    addEntity_index<R = void, P0 = unknown, P1 = number>(_addEntity: P0, _index: P1): R;
    objectValue<R = unknown>(): R;
    stringValue<R = unknown>(): R;
    setWhitespace<R = void, P0 = unknown>(_setWhitespace: P0): R;
    fidelity<R = number>(): R;
    setFidelity<R = void, P0 = number>(_setFidelity: P0): R;
  }
  namespace NSXMLNamedFidelityNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXMLNamedNode {
      alloc<R = NSXMLNamedFidelityNode>(): R;
      new: <R = NSXMLNamedFidelityNode>() => R;
    }
  }
}

declare const NSXMLNamedFidelityNode: cocoa.NSXMLNamedFidelityNode.CLASS;
