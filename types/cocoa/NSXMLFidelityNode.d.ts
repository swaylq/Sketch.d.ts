/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLFidelityNode<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
    isCDATA<R = boolean>(): R;
    setNames<R = void, P0 = unknown>(_setNames: P0): R;
    setRanges<R = void, P0 = unknown>(_setRanges: P0): R;
    fidelity<R = number>(): R;
    setFidelity<R = void, P0 = number>(_setFidelity: P0): R;
    _XMLStringWithCharactersOnly<R = unknown>(): R;
    objectValue<R = unknown>(): R;
    stringValue<R = unknown>(): R;
    addEntity_index<R = void, P0 = unknown, P1 = number>(_addEntity: P0, _index: P1): R;
    whitespace<R = unknown>(): R;
    setWhitespace<R = void, P0 = unknown>(_setWhitespace: P0): R;
  }
  namespace NSXMLFidelityNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
      alloc<R = NSXMLFidelityNode>(): R;
      new: <R = NSXMLFidelityNode>() => R;
      charRefToUnicode<R = number, P0 = string>(_charRefToUnicode: P0): R;
      stringValueSubstitutingEntitiesForNode_ranges_names_objectValue<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_stringValueSubstitutingEntitiesForNode: P0, _ranges: P1, _names: P2, _objectValue: P3): R;
      setObjectValuePreservingEntitiesForNode_string<R = void, P0 = unknown, P1 = unknown>(_setObjectValuePreservingEntitiesForNode: P0, _string: P1): R;
    }
  }
}

declare const NSXMLFidelityNode: cocoa.NSXMLFidelityNode.CLASS;
