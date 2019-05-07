/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLDocument<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
    _setContentKindAndEncoding<R = void>(): R;
    _initWithLibTidyDoc_child_encoding<R = void, P0 = _TidyDoc, P1 = _TidyNode, P2 = number>(__initWithLibTidyDoc: P0, _child: P1, _encoding: P2): R;
    _libxml2TreeRepresentation<R = _xmlDoc>(): R;
    _validateWithSchemaAndReturnError<R = boolean, P0 = unknown>(__validateWithSchemaAndReturnError: P0): R;
    validateAndReturnError<R = boolean, P0 = unknown>(_validateAndReturnError: P0): R;
    _applyStylesheet_arguments_error<R = unknown, P0 = _xmlDoc, P1 = unknown, P2 = unknown>(__applyStylesheet: P0, _arguments: P1, _error: P2): R;
    objectByApplyingXSLTAtURL_arguments_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_objectByApplyingXSLTAtURL: P0, _arguments: P1, _error: P2): R;
    objectByApplyingXSLTString_arguments_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_objectByApplyingXSLTString: P0, _arguments: P1, _error: P2): R;
    objectByApplyingXSLT_arguments_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_objectByApplyingXSLT: P0, _arguments: P1, _error: P2): R;
    objectByApplyingXSLTAtURL_error<R = unknown, P0 = unknown, P1 = unknown>(_objectByApplyingXSLTAtURL: P0, _error: P1): R;
    objectByApplyingXSLT_error<R = unknown, P0 = unknown, P1 = unknown>(_objectByApplyingXSLT: P0, _error: P1): R;
    XMLDataWithOptions<R = unknown, P0 = number>(_XMLDataWithOptions: P0): R;
    _canonicalXMLStringPreservingComments_namespaceString_relationships<R = unknown, P0 = boolean, P1 = unknown, P2 = unknown>(__canonicalXMLStringPreservingComments: P0, _namespaceString: P1, _relationships: P2): R;
    replaceObjectInChildrenAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectInChildrenAtIndex: P0, _withObject: P1): R;
    removeObjectFromChildrenAtIndex<R = void, P0 = number>(_removeObjectFromChildrenAtIndex: P0): R;
    insertObject_inChildrenAtIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _inChildrenAtIndex: P1): R;
    objectInChildrenAtIndex<R = unknown, P0 = number>(_objectInChildrenAtIndex: P0): R;
    countOfChildren<R = number>(): R;
    replaceChildAtIndex_withNode<R = void, P0 = number, P1 = unknown>(_replaceChildAtIndex: P0, _withNode: P1): R;
    addChild<R = void, P0 = unknown>(_addChild: P0): R;
    setChildren<R = void, P0 = unknown>(_setChildren: P0): R;
    removeChildAtIndex<R = void, P0 = number>(_removeChildAtIndex: P0): R;
    insertChildren_atIndex<R = void, P0 = unknown, P1 = number>(_insertChildren: P0, _atIndex: P1): R;
    insertChild_atIndex<R = void, P0 = unknown, P1 = number>(_insertChild: P0, _atIndex: P1): R;
    XPath<R = unknown>(): R;
    childCount<R = number>(): R;
    _children<R = unknown>(): R;
    children<R = unknown>(): R;
    stringValue<R = unknown>(): R;
    objectValue<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    rootElement<R = unknown>(): R;
    setRootElement<R = void, P0 = unknown>(_setRootElement: P0): R;
    URI<R = unknown>(): R;
    setURI<R = void, P0 = unknown>(_setURI: P0): R;
    _tidyWithData_error_isXML_detectedEncoding<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = number>(__tidyWithData: P0, _error: P1, _isXML: P2, _detectedEncoding: P3): R;
    initWithRootElement<R = unknown, P0 = unknown>(_initWithRootElement: P0): R;
    initWithData_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithData: P0, _options: P1, _error: P2): R;
    _initWithData_encoding_options_error<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(__initWithData: P0, _encoding: P1, _options: P2, _error: P3): R;
    initWithContentsOfURL_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithContentsOfURL: P0, _options: P1, _error: P2): R;
    initWithData_options_validExternalEntityURLs_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_initWithData: P0, _options: P1, _validExternalEntityURLs: P2, _error: P3): R;
    initWithXMLString_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithXMLString: P0, _options: P1, _error: P2): R;
    XMLData<R = NSData>(): R;
    DTD<R = NSXMLDTD>(): R;
    setDTD<R = void, P0 = NSXMLDTD>(_v: P0): R;
    MIMEType<R = NSString>(): R;
    setMIMEType<R = void, P0 = NSString>(_v: P0): R;
    documentContentKind<R = number>(): R;
    setDocumentContentKind<R = void, P0 = number>(_v: P0): R;
    standalone<R = boolean>(): R;
    setStandalone<R = void, P0 = boolean>(_v: P0): R;
    version<R = NSString>(): R;
    setVersion<R = void, P0 = NSString>(_v: P0): R;
    characterEncoding<R = NSString>(): R;
    setCharacterEncoding<R = void, P0 = NSString>(_v: P0): R;
    // + NSXMLDocument(SVGDocument): 
    bezierPathElement<R = unknown, P0 = unknown>(_bezierPathElement: P0): R;
    data<R = unknown>(): R;
    description<R = unknown>(): R;
    createSVGForBezierPath<R = unknown, P0 = unknown>(_createSVGForBezierPath: P0): R;
  }
  namespace NSXMLDocument {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
      alloc<R = NSXMLDocument>(): R;
      new: <R = NSXMLDocument>() => R;
      _loadXSLT<R = void>(): R;
      replacementClassForClass<R = unknown, P0 = unknown>(_replacementClassForClass: P0): R;
      _setXMLTagsAllowableInHTML<R = void, P0 = unknown>(__setXMLTagsAllowableInHTML: P0): R;
      _instancesShouldLoadExternalEntities<R = boolean>(): R;
      _setInstancesShouldLoadExternalEntities<R = void, P0 = boolean>(__setInstancesShouldLoadExternalEntities: P0): R;
      // + NSXMLDocument(SVGDocument): 
      SVGDocumentWithBezierPath<R = unknown, P0 = unknown>(_SVGDocumentWithBezierPath: P0): R;
    }
  }
}

declare const NSXMLDocument: cocoa.NSXMLDocument.CLASS;
