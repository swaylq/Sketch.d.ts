/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLElement<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
    _libxml2TreeRepresentationWithNamespaces<R = _xmlNode, P0 = unknown>(__libxml2TreeRepresentationWithNamespaces: P0): R;
    _prefixIndex<R = number>(): R;
    _setPrefix<R = boolean, P0 = unknown>(__setPrefix: P0): R;
    prefix<R = unknown>(): R;
    localName<R = unknown>(): R;
    _resolveName<R = void>(): R;
    _nameIsEqualToNameOfNode<R = boolean, P0 = unknown>(__nameIsEqualToNameOfNode: P0): R;
    _children<R = unknown>(): R;
    _canonicalXMLStringPreservingComments_namespaceString_relationships<R = unknown, P0 = boolean, P1 = unknown, P2 = unknown>(__canonicalXMLStringPreservingComments: P0, _namespaceString: P1, _relationships: P2): R;
    replaceObjectInChildrenAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectInChildrenAtIndex: P0, _withObject: P1): R;
    removeObjectFromChildrenAtIndex<R = void, P0 = number>(_removeObjectFromChildrenAtIndex: P0): R;
    insertObject_inChildrenAtIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _inChildrenAtIndex: P1): R;
    objectInChildrenAtIndex<R = unknown, P0 = number>(_objectInChildrenAtIndex: P0): R;
    countOfChildren<R = number>(): R;
    normalizeAdjacentTextNodesPreservingCDATA<R = void, P0 = boolean>(_normalizeAdjacentTextNodesPreservingCDATA: P0): R;
    replaceChildAtIndex_withNode<R = void, P0 = number, P1 = unknown>(_replaceChildAtIndex: P0, _withNode: P1): R;
    addChild<R = void, P0 = unknown>(_addChild: P0): R;
    setChildren<R = void, P0 = unknown>(_setChildren: P0): R;
    removeChildAtIndex<R = void, P0 = number>(_removeChildAtIndex: P0): R;
    insertChildren_atIndex<R = void, P0 = unknown, P1 = number>(_insertChildren: P0, _atIndex: P1): R;
    insertChild_atIndex<R = void, P0 = unknown, P1 = number>(_insertChild: P0, _atIndex: P1): R;
    _bindNamespaceName_URI<R = boolean, P0 = unknown, P1 = unknown>(__bindNamespaceName: P0, _URI: P1): R;
    _bindAncestorNamespaces<R = void>(): R;
    _changeQNameURI_toURI_forPrefix<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__changeQNameURI: P0, _toURI: P1, _forPrefix: P2): R;
    _changeQNamePrefix_toPrefix_forURI<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__changeQNamePrefix: P0, _toPrefix: P1, _forURI: P2): R;
    resolvePrefixForNamespaceURI<R = unknown, P0 = unknown>(_resolvePrefixForNamespaceURI: P0): R;
    _resolveNamespaceForPrefix<R = unknown, P0 = unknown>(__resolveNamespaceForPrefix: P0): R;
    resolveNamespaceForName<R = unknown, P0 = unknown>(_resolveNamespaceForName: P0): R;
    removeNamespaceForPrefix<R = void, P0 = unknown>(_removeNamespaceForPrefix: P0): R;
    _namespaceForURI<R = unknown, P0 = unknown>(__namespaceForURI: P0): R;
    namespaceForPrefix<R = unknown, P0 = unknown>(_namespaceForPrefix: P0): R;
    addNamespace<R = void, P0 = unknown>(_addNamespace: P0): R;
    removeObjectFromNamespacesAtIndex<R = void, P0 = number>(_removeObjectFromNamespacesAtIndex: P0): R;
    insertObject_inNamespacesAtIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _inNamespacesAtIndex: P1): R;
    objectInNamespacesAtIndex<R = unknown, P0 = number>(_objectInNamespacesAtIndex: P0): R;
    countOfNamespaces<R = number>(): R;
    removeObjectFromAttributesAtIndex<R = void, P0 = number>(_removeObjectFromAttributesAtIndex: P0): R;
    _addTrustedAttribute_atIndex<R = void, P0 = unknown, P1 = number>(__addTrustedAttribute: P0, _atIndex: P1): R;
    removeAttributeForName<R = void, P0 = unknown>(_removeAttributeForName: P0): R;
    attributeForLocalName_URI<R = unknown, P0 = unknown, P1 = unknown>(_attributeForLocalName: P0, _URI: P1): R;
    attributeForName<R = unknown, P0 = unknown>(_attributeForName: P0): R;
    addAttribute<R = void, P0 = unknown>(_addAttribute: P0): R;
    setAttributesAsDictionary<R = void, P0 = unknown>(_setAttributesAsDictionary: P0): R;
    setAttributesWithDictionary<R = void, P0 = unknown>(_setAttributesWithDictionary: P0): R;
    insertObject_inAttributesAtIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _inAttributesAtIndex: P1): R;
    objectInAttributesAtIndex<R = unknown, P0 = number>(_objectInAttributesAtIndex: P0): R;
    countOfAttributes<R = number>(): R;
    elementsForLocalName_URI<R = unknown, P0 = unknown, P1 = unknown>(_elementsForLocalName: P0, _URI: P1): R;
    elementsForName<R = unknown, P0 = unknown>(_elementsForName: P0): R;
    XPath<R = unknown>(): R;
    _setQNamesAreResolved<R = void, P0 = boolean>(__setQNamesAreResolved: P0): R;
    _QNamesAreResolved<R = boolean>(): R;
    URI<R = unknown>(): R;
    setURI<R = void, P0 = unknown>(_setURI: P0): R;
    _setLocalName<R = void, P0 = unknown>(__setLocalName: P0): R;
    childCount<R = number>(): R;
    children<R = unknown>(): R;
    stringValue<R = unknown>(): R;
    objectValue<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    name<R = unknown>(): R;
    validateName_error<R = boolean, P0 = unknown, P1 = unknown>(_validateName: P0, _error: P1): R;
    setName<R = void, P0 = unknown>(_setName: P0): R;
    initWithXMLString_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithXMLString: P0, _error: P1): R;
    _initWithName_URI_prefixIndex<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(__initWithName: P0, _URI: P1, _prefixIndex: P2): R;
    initWithName_URI<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _URI: P1): R;
    initWithName_stringValue<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _stringValue: P1): R;
    initWithLocalName_URI<R = unknown, P0 = unknown, P1 = unknown>(_initWithLocalName: P0, _URI: P1): R;
    initWithName<R = unknown, P0 = unknown>(_initWithName: P0): R;
    namespaces<R = NSArray>(): R;
    setNamespaces<R = void, P0 = NSArray>(_v: P0): R;
    attributes<R = NSArray>(): R;
    setAttributes<R = void, P0 = NSArray>(_v: P0): R;
    // + NSXMLElement(SVG): 
    addAttributeWithName_percentageFractionalValue<R = void, P0 = unknown, P1 = number>(_addAttributeWithName: P0, _percentageFractionalValue: P1): R;
    addAttributeWithName_percentageValue<R = void, P0 = unknown, P1 = number>(_addAttributeWithName: P0, _percentageValue: P1): R;
    addAttributeWithName_numberValue<R = void, P0 = unknown, P1 = number>(_addAttributeWithName: P0, _numberValue: P1): R;
    addAttributeWithName_pixelValue<R = void, P0 = unknown, P1 = number>(_addAttributeWithName: P0, _pixelValue: P1): R;
    addAttributeWithName_stringValue<R = void, P0 = unknown, P1 = unknown>(_addAttributeWithName: P0, _stringValue: P1): R;
    cssClassNamesWithBase<R = unknown, P0 = unknown>(_cssClassNamesWithBase: P0): R;
    urlLink<R = unknown>(): R;
    localLink<R = unknown>(): R;
    simplifyAttributesIgnoringElements_attributes<R = unknown, P0 = unknown, P1 = unknown>(_simplifyAttributesIgnoringElements: P0, _attributes: P1): R;
    removeAttributesMatchingParentIgnoringAttributes<R = void, P0 = unknown>(_removeAttributesMatchingParentIgnoringAttributes: P0): R;
    attributesWithStyleMergedDefaults<R = unknown, P0 = unknown>(_attributesWithStyleMergedDefaults: P0): R;
    nodeOrParentNodeWithName<R = unknown, P0 = unknown>(_nodeOrParentNodeWithName: P0): R;
    colorFromAttributeWithName<R = unknown, P0 = unknown>(_colorFromAttributeWithName: P0): R;
    doubleValueFromPercentageAttributeWithName_orDefault<R = number, P0 = unknown, P1 = number>(_doubleValueFromPercentageAttributeWithName: P0, _orDefault: P1): R;
    doubleValueFromPercentageAttributeWithName_alternate<R = number, P0 = unknown, P1 = unknown>(_doubleValueFromPercentageAttributeWithName: P0, _alternate: P1): R;
    doubleValueFromPercentageAttributeWithName<R = number, P0 = unknown>(_doubleValueFromPercentageAttributeWithName: P0): R;
    rectValueWithXScale_yScale<R = CGRect, P0 = number, P1 = number>(_rectValueWithXScale: P0, _yScale: P1): R;
    rectValue<R = CGRect>(): R;
    rectValueFromAttributeWithName<R = CGRect, P0 = unknown>(_rectValueFromAttributeWithName: P0): R;
    intValueFromAttributeWithName<R = number, P0 = unknown>(_intValueFromAttributeWithName: P0): R;
    stringForHREFLink<R = unknown>(): R;
    stringFromAttributeWithName_orDefault<R = unknown, P0 = unknown, P1 = unknown>(_stringFromAttributeWithName: P0, _orDefault: P1): R;
    stringFromAttributeWithName<R = unknown, P0 = unknown>(_stringFromAttributeWithName: P0): R;
    numbersFromAttributeWithName_scale<R = unknown, P0 = unknown, P1 = number>(_numbersFromAttributeWithName: P0, _scale: P1): R;
    numbersFromAttributeWithName<R = unknown, P0 = unknown>(_numbersFromAttributeWithName: P0): R;
    doubleValueFromAttributeWithName_orDefault<R = number, P0 = unknown, P1 = number>(_doubleValueFromAttributeWithName: P0, _orDefault: P1): R;
    doubleValueFromAttributeWithName_scale<R = number, P0 = unknown, P1 = number>(_doubleValueFromAttributeWithName: P0, _scale: P1): R;
    doubleValueFromAttributeWithName_alternate<R = number, P0 = unknown, P1 = unknown>(_doubleValueFromAttributeWithName: P0, _alternate: P1): R;
    doubleValueFromAttributeWithName<R = number, P0 = unknown>(_doubleValueFromAttributeWithName: P0): R;
    numberFromAttributeWithName_scale<R = unknown, P0 = unknown, P1 = number>(_numberFromAttributeWithName: P0, _scale: P1): R;
    numberFromAttributeWithName<R = unknown, P0 = unknown>(_numberFromAttributeWithName: P0): R;
    gotAttributeWithName<R = boolean, P0 = unknown>(_gotAttributeWithName: P0): R;
  }
  namespace NSXMLElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
      alloc<R = NSXMLElement>(): R;
      new: <R = NSXMLElement>() => R;
      _elementFromTidyDoc_element_encoding_elementClass_nodeClass<R = unknown, P0 = _TidyDoc, P1 = _TidyNode, P2 = number, P3 = unknown, P4 = unknown>(__elementFromTidyDoc: P0, _element: P1, _encoding: P2, _elementClass: P3, _nodeClass: P4): R;
  
  }
  }
}

declare const NSXMLElement: cocoa.NSXMLElement.CLASS;
