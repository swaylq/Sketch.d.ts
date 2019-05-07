/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLElementDeclarationContent<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
    libxml2Content<R = _xmlElementContent>(): R;
    XMLStringSequenceStarted_choiceStarted_appendingToString<R = void, P0 = boolean, P1 = boolean, P2 = unknown>(_XMLStringSequenceStarted: P0, _choiceStarted: P1, _appendingToString: P2): R;
    occurrence<R = number>(): R;
    contentKind<R = number>(): R;
    rightChild<R = unknown>(): R;
    setRightChild<R = void, P0 = unknown>(_setRightChild: P0): R;
    leftChild<R = unknown>(): R;
    setLeftChild<R = void, P0 = unknown>(_setLeftChild: P0): R;
    name<R = unknown>(): R;
    setName<R = void, P0 = unknown>(_setName: P0): R;
    initWithContentKind_occurrence<R = unknown, P0 = number, P1 = number>(_initWithContentKind: P0, _occurrence: P1): R;
  }
  namespace NSXMLElementDeclarationContent {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
      alloc<R = NSXMLElementDeclarationContent>(): R;
      new: <R = NSXMLElementDeclarationContent>() => R;
      createElementContentFromString<R = unknown, P0 = unknown>(_createElementContentFromString: P0): R;
      createElementContent<R = unknown, P0 = _xmlElementContent>(_createElementContent: P0): R;
    }
  }
}

declare const NSXMLElementDeclarationContent: cocoa.NSXMLElementDeclarationContent.CLASS;
