/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLSAXParser<T0 = void, T1 = void, T2 = void> extends NSObject {
    _createElementContent<R = unknown, P0 = _xmlElementContent>(__createElementContent: P0): R;
    isSingleDTDNode<R = boolean>(): R;
    afterEntityLookup<R = boolean>(): R;
    setAfterEntityLookup<R = void, P0 = boolean>(_setAfterEntityLookup: P0): R;
    _addEntity<R = void, P0 = unknown>(__addEntity: P0): R;
    _addWhitespace<R = void>(): R;
    _addContent<R = void>(): R;
    setWhitespace<R = void, P0 = unknown>(_setWhitespace: P0): R;
    whitespace<R = unknown>(): R;
    setContent<R = void, P0 = unknown>(_setContent: P0): R;
    content<R = unknown>(): R;
    context<R = _xmlParserCtxt>(): R;
    setError_info_fatal<R = void, P0 = number, P1 = unknown, P2 = boolean>(_setError: P0, _info: P1, _fatal: P2): R;
    fidelityMask<R = number>(): R;
    current<R = unknown>(): R;
    setCurrent<R = void, P0 = unknown>(_setCurrent: P0): R;
    root<R = unknown>(): R;
    setRoot<R = void, P0 = unknown>(_setRoot: P0): R;
    parse<R = unknown>(): R;
    initWithData_isSingleDTDNode_options_error<R = unknown, P0 = unknown, P1 = boolean, P2 = number, P3 = unknown>(_initWithData: P0, _isSingleDTDNode: P1, _options: P2, _error: P3): R;
    initWithData_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithData: P0, _options: P1, _error: P2): R;
    initWithContentsOfURL_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithContentsOfURL: P0, _options: P1, _error: P2): R;
    dealloc<R = void>(): R;
  }
  namespace NSXMLSAXParser {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSXMLSAXParser>(): R;
      new: <R = NSXMLSAXParser>() => R;
    }
  }
}

declare const NSXMLSAXParser: cocoa.NSXMLSAXParser.CLASS;
