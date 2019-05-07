/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLTreeReader<T0 = void, T1 = void, T2 = void> extends NSObject {
    DTDString<R = unknown>(): R;
    _addEntity<R = void, P0 = unknown>(__addEntity: P0): R;
    _addContent<R = void>(): R;
    setContent<R = void, P0 = unknown>(_setContent: P0): R;
    setCurrent<R = void, P0 = unknown>(_setCurrent: P0): R;
    root<R = unknown>(): R;
    setRoot<R = void, P0 = unknown>(_setRoot: P0): R;
    _xmlExternalEntityWithURL_identifier_context_originalLoaderFunction<R = _xmlParserInput, P0 = string, P1 = string, P2 = _xmlParserCtxt, P3 = CDUnknownFunctionPointerType>(__xmlExternalEntityWithURL: P0, _identifier: P1, _context: P2, _originalLoaderFunction: P3): R;
    processXMLDeclaration<R = void, P0 = _xmlTextReader>(_processXMLDeclaration: P0): R;
    processEndEntity<R = void, P0 = _xmlTextReader>(_processEndEntity: P0): R;
    processSignificantWhitespace<R = void, P0 = _xmlTextReader>(_processSignificantWhitespace: P0): R;
    processWhitespace<R = void, P0 = _xmlTextReader>(_processWhitespace: P0): R;
    processNotation<R = void, P0 = _xmlTextReader>(_processNotation: P0): R;
    processDocumentFragment<R = void, P0 = _xmlTextReader>(_processDocumentFragment: P0): R;
    processDocumentType<R = void, P0 = _xmlTextReader>(_processDocumentType: P0): R;
    processDocument<R = void, P0 = _xmlTextReader>(_processDocument: P0): R;
    processComment<R = void, P0 = _xmlTextReader>(_processComment: P0): R;
    processProcessingInstruction<R = void, P0 = _xmlTextReader>(_processProcessingInstruction: P0): R;
    processEntity<R = void, P0 = _xmlTextReader>(_processEntity: P0): R;
    processEntityReference<R = void, P0 = _xmlTextReader>(_processEntityReference: P0): R;
    processCDATA<R = void, P0 = _xmlTextReader>(_processCDATA: P0): R;
    processText<R = void, P0 = _xmlTextReader>(_processText: P0): R;
    createNamedNodeFromNode_reader<R = unknown, P0 = _xmlNode, P1 = _xmlTextReader>(_createNamedNodeFromNode: P0, _reader: P1): R;
    processEndElement<R = void, P0 = _xmlTextReader>(_processEndElement: P0): R;
    processElement<R = void, P0 = _xmlTextReader>(_processElement: P0): R;
    processRealDocument<R = void, P0 = _xmlDoc>(_processRealDocument: P0): R;
    processNode<R = void, P0 = _xmlTextReader>(_processNode: P0): R;
    setError_info_fatal<R = void, P0 = number, P1 = unknown, P2 = boolean>(_setError: P0, _info: P1, _fatal: P2): R;
    parse<R = unknown>(): R;
    URI<R = unknown>(): R;
    setURI<R = void, P0 = unknown>(_setURI: P0): R;
    externalEntityLoadingPolicy<R = number>(): R;
    setExternalEntityLoadingPolicy<R = void, P0 = number>(_setExternalEntityLoadingPolicy: P0): R;
    setAllowedEntityURLs<R = void, P0 = unknown>(_setAllowedEntityURLs: P0): R;
    allowedEntityURLs<R = unknown>(): R;
    _initializeReader<R = void>(): R;
    initWithData_documentClass_isSingleDTDNode_options_error<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = number, P4 = unknown>(_initWithData: P0, _documentClass: P1, _isSingleDTDNode: P2, _options: P3, _error: P4): R;
    initWithData_documentClass_options_error<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_initWithData: P0, _documentClass: P1, _options: P2, _error: P3): R;
    dealloc<R = void>(): R;
    url<R = NSURL>(): R;
  }
  namespace NSXMLTreeReader {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSXMLTreeReader>(): R;
      new: <R = NSXMLTreeReader>() => R;
      currentReader<R = unknown>(): R;
      setCurrentReader<R = void, P0 = unknown>(_setCurrentReader: P0): R;
    }
  }
}

declare const NSXMLTreeReader: cocoa.NSXMLTreeReader.CLASS;
