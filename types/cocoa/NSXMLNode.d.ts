/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNode<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    _setParent<R = void, P0 = unknown>(__setParent: P0): R;
    _setKind<R = void, P0 = number>(__setKind: P0): R;
    _setIndex<R = void, P0 = number>(__setIndex: P0): R;
    hash<R = number>(): R;
    objectsForXQuery_constants_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_objectsForXQuery: P0, _constants: P1, _error: P2): R;
    objectsForXQuery_error<R = unknown, P0 = unknown, P1 = unknown>(_objectsForXQuery: P0, _error: P1): R;
    nodesForXPath_error<R = unknown, P0 = unknown, P1 = unknown>(_nodesForXPath: P0, _error: P1): R;
    XMLData<R = unknown>(): R;
    canonicalXMLStringPreservingComments<R = unknown, P0 = boolean>(_canonicalXMLStringPreservingComments: P0): R;
    _XMLStringWithOptions_appendingToString<R = void, P0 = number, P1 = unknown>(__XMLStringWithOptions: P0, _appendingToString: P1): R;
    XMLStringWithOptions<R = unknown, P0 = number>(_XMLStringWithOptions: P0): R;
    _setURI<R = void, P0 = unknown>(__setURI: P0): R;
    detach<R = void>(): R;
    childAtIndex<R = unknown, P0 = number>(_childAtIndex: P0): R;
    setStringValue_resolvingEntities<R = void, P0 = unknown, P1 = boolean>(_setStringValue: P0, _resolvingEntities: P1): R;
    initWithKind_options<R = unknown, P0 = number, P1 = number>(_initWithKind: P0, _options: P1): R;
    initWithKind<R = unknown, P0 = number>(_initWithKind: P0): R;
    dealloc<R = void>(): R;
    XMLString<R = NSString>(): R;
    description<R = NSString>(): R;
    URI<R = NSString>(): R;
    setURI<R = void, P0 = NSString>(_v: P0): R;
    prefix<R = NSString>(): R;
    localName<R = NSString>(): R;
    XPath<R = NSString>(): R;
    nextNode<R = NSXMLNode>(): R;
    previousNode<R = NSXMLNode>(): R;
    nextSibling<R = NSXMLNode>(): R;
    previousSibling<R = NSXMLNode>(): R;
    level<R = number>(): R;
    index<R = number>(): R;
    stringValue<R = NSString>(): R;
    setStringValue<R = void, P0 = NSString>(_v: P0): R;
    objectValue<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    rootDocument<R = NSXMLDocument>(): R;
    childCount<R = number>(): R;
    children<R = NSArray>(): R;
    parent<R = NSXMLNode>(): R;
    kind<R = number>(): R;
    // + NSXMLNode(SVG): 
    cssClassNamesWithBase<R = unknown, P0 = unknown>(_cssClassNamesWithBase: P0): R;
    simplifyAttributesIgnoringElements_attributes<R = unknown, P0 = unknown, P1 = unknown>(_simplifyAttributesIgnoringElements: P0, _attributes: P1): R;
    numberValuesWithScale<R = unknown, P0 = number>(_numberValuesWithScale: P0): R;
    numberValues<R = unknown>(): R;
    rectValue<R = CGRect>(): R;
    integerValue<R = number>(): R;
    doubleValueWithScale<R = number, P0 = number>(_doubleValueWithScale: P0): R;
    doubleValue<R = number>(): R;
    numberValueWithScale<R = unknown, P0 = number>(_numberValueWithScale: P0): R;
    numberValue<R = unknown>(): R;
    doubleValueFromAttributeWithName<R = number, P0 = unknown>(_doubleValueFromAttributeWithName: P0): R;
  }
  namespace NSXMLNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSXMLNode>(): R;
      new: <R = NSXMLNode>() => R;
      _contentsOfHTMLData_encoding_strippingTagsSeparatedByString<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__contentsOfHTMLData: P0, _encoding: P1, _strippingTagsSeparatedByString: P2): R;
      _contentsOfHTMLData_strippingTagsSeparatedByString<R = unknown, P0 = unknown, P1 = unknown>(__contentsOfHTMLData: P0, _strippingTagsSeparatedByString: P1): R;
      _nodeFromLibXML2Node<R = unknown, P0 = void>(__nodeFromLibXML2Node: P0): R;
      _htmlFromTidyNode_tidyDoc_appendingToString<R = boolean, P0 = void, P1 = void, P2 = unknown>(__htmlFromTidyNode: P0, _tidyDoc: P1, _appendingToString: P2): R;
      _tidyHTMLBody<R = unknown, P0 = unknown>(__tidyHTMLBody: P0): R;
      _escapeHTMLAttributeCharacters_withQuote_appendingToString<R = void, P0 = unknown, P1 = number, P2 = unknown>(__escapeHTMLAttributeCharacters: P0, _withQuote: P1, _appendingToString: P2): R;
      _escapeCharacters_countOfCharacters_inString_appendingToString<R = void, P0 = number, P1 = number, P2 = unknown, P3 = unknown>(__escapeCharacters: P0, _countOfCharacters: P1, _inString: P2, _appendingToString: P3): R;
      predefinedNamespaceForPrefix<R = unknown, P0 = unknown>(_predefinedNamespaceForPrefix: P0): R;
      prefixForName<R = unknown, P0 = unknown>(_prefixForName: P0): R;
      localNameForName<R = unknown, P0 = unknown>(_localNameForName: P0): R;
      DTDNodeWithXMLString<R = unknown, P0 = unknown>(_DTDNodeWithXMLString: P0): R;
      textWithStringValue<R = unknown, P0 = unknown>(_textWithStringValue: P0): R;
      commentWithStringValue<R = unknown, P0 = unknown>(_commentWithStringValue: P0): R;
      processingInstructionWithName_stringValue<R = unknown, P0 = unknown, P1 = unknown>(_processingInstructionWithName: P0, _stringValue: P1): R;
      namespaceWithName_stringValue<R = unknown, P0 = unknown, P1 = unknown>(_namespaceWithName: P0, _stringValue: P1): R;
      attributeWithName_URI_stringValue<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_attributeWithName: P0, _URI: P1, _stringValue: P2): R;
      attributeWithLocalName_URI_stringValue<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_attributeWithLocalName: P0, _URI: P1, _stringValue: P2): R;
      attributeWithName_stringValue<R = unknown, P0 = unknown, P1 = unknown>(_attributeWithName: P0, _stringValue: P1): R;
      elementWithName_children_attributes<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_elementWithName: P0, _children: P1, _attributes: P2): R;
      elementWithName_stringValue<R = unknown, P0 = unknown, P1 = unknown>(_elementWithName: P0, _stringValue: P1): R;
      elementWithName_URI<R = unknown, P0 = unknown, P1 = unknown>(_elementWithName: P0, _URI: P1): R;
      elementWithLocalName_URI<R = unknown, P0 = unknown, P1 = unknown>(_elementWithLocalName: P0, _URI: P1): R;
      elementWithName<R = unknown, P0 = unknown>(_elementWithName: P0): R;
      documentWithRootElement<R = unknown, P0 = unknown>(_documentWithRootElement: P0): R;
      documentWithContentsOfURL_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_documentWithContentsOfURL: P0, _options: P1, _error: P2): R;
      document<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      _alloc<R = unknown>(): R;
      // + NSXMLNode(SVG): 
      attributeWithName_percentageFractionalValue<R = unknown, P0 = unknown, P1 = number>(_attributeWithName: P0, _percentageFractionalValue: P1): R;
      attributeWithName_percentageValue<R = unknown, P0 = unknown, P1 = number>(_attributeWithName: P0, _percentageValue: P1): R;
      attributeWithName_numberValue<R = unknown, P0 = unknown, P1 = number>(_attributeWithName: P0, _numberValue: P1): R;
      attributeWithName_pixelValue<R = unknown, P0 = unknown, P1 = number>(_attributeWithName: P0, _pixelValue: P1): R;
      numbersFromString_scale<R = unknown, P0 = unknown, P1 = number>(_numbersFromString: P0, _scale: P1): R;
      numberFromString_scale<R = unknown, P0 = unknown, P1 = number>(_numberFromString: P0, _scale: P1): R;
      doubleFromString_scale<R = number, P0 = unknown, P1 = number>(_doubleFromString: P0, _scale: P1): R;
    }
  }
}

declare const NSXMLNode: cocoa.NSXMLNode.CLASS;
