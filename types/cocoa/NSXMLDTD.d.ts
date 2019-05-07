/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLDTD<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
    _addLibxml2TreeRepresentationToDoc_context<R = void, P0 = _xmlDoc, P1 = _xmlValidCtxt>(__addLibxml2TreeRepresentationToDoc: P0, _context: P1): R;
    _renameChild_toName<R = void, P0 = unknown, P1 = unknown>(__renameChild: P0, _toName: P1): R;
    _elementAttributeRelationship<R = unknown>(): R;
    _internalXMLStringWithOptions_appendingToString<R = void, P0 = number, P1 = unknown>(__internalXMLStringWithOptions: P0, _appendingToString: P1): R;
    attributeDeclarationForName_elementName<R = unknown, P0 = unknown, P1 = unknown>(_attributeDeclarationForName: P0, _elementName: P1): R;
    elementDeclarationForName<R = unknown, P0 = unknown>(_elementDeclarationForName: P0): R;
    notationDeclarationForName<R = unknown, P0 = unknown>(_notationDeclarationForName: P0): R;
    entityDeclarationForName<R = unknown, P0 = unknown>(_entityDeclarationForName: P0): R;
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
    _setModified<R = void, P0 = boolean>(__setModified: P0): R;
    _DTDString<R = unknown>(): R;
    _setDTDString<R = void, P0 = unknown>(__setDTDString: P0): R;
    childCount<R = number>(): R;
    _children<R = unknown>(): R;
    children<R = unknown>(): R;
    name<R = unknown>(): R;
    setName<R = void, P0 = unknown>(_setName: P0): R;
    initWithData_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithData: P0, _options: P1, _error: P2): R;
    initWithContentsOfURL_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithContentsOfURL: P0, _options: P1, _error: P2): R;
    systemID<R = NSString>(): R;
    setSystemID<R = void, P0 = NSString>(_v: P0): R;
    publicID<R = NSString>(): R;
    setPublicID<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSXMLDTD {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
      alloc<R = NSXMLDTD>(): R;
      new: <R = NSXMLDTD>() => R;
      _initializePredefinedEntities<R = void>(): R;
      predefinedEntityDeclarationForName<R = unknown, P0 = unknown>(_predefinedEntityDeclarationForName: P0): R;
      _initializeDTD_fromTidyNode<R = void, P0 = unknown, P1 = _TidyNode>(__initializeDTD: P0, _fromTidyNode: P1): R;
    }
  }
}

declare const NSXMLDTD: cocoa.NSXMLDTD.CLASS;
