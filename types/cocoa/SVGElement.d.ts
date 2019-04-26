/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGElement<T0 = void, T1 = void, T2 = void> extends _SVGElement {
    makeLayerWithParentLayer_progress<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_makeLayerWithParentLayer: P0, _progress: P1): R;
    adjustOwnLayer_parentLayer<R = unknown, P0 = unknown, P1 = unknown>(_adjustOwnLayer: P0, _parentLayer: P1): R;
    nameLayer<R = void, P0 = unknown>(_nameLayer: P0): R;
    adjustSizeForChildrenOfLayer<R = void, P0 = unknown>(_adjustSizeForChildrenOfLayer: P0): R;
    makeChildLayersWithParentLayer_progress<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_makeChildLayersWithParentLayer: P0, _progress: P1): R;
    makeOwnLayerWithParentLayer<R = unknown, P0 = unknown>(_makeOwnLayerWithParentLayer: P0): R;
    isDescendantOf<R = boolean, P0 = unknown>(_isDescendantOf: P0): R;
    styleAttributesForElement_defaults<R = unknown, P0 = unknown, P1 = unknown>(_styleAttributesForElement: P0, _defaults: P1): R;
    relativeURLForLink<R = unknown, P0 = unknown>(_relativeURLForLink: P0): R;
    resolvedValue_forProperty<R = void, P0 = unknown, P1 = unknown>(_resolvedValue: P0, _forProperty: P1): R;
    clippingParent<R = unknown>(): R;
    drawableParent<R = unknown>(): R;
    containsDrawables<R = boolean>(): R;
    name<R = unknown>(): R;
    addReferenceToIdentifier_type_property<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_addReferenceToIdentifier: P0, _type: P1, _property: P2): R;
    svgAttributesDescription<R = unknown>(): R;
    svgDescription<R = unknown>(): R;
    elementOfType_xml_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_elementOfType: P0, _xml: P1, _parent: P2): R;
    processStyles<R = void, P0 = unknown>(_processStyles: P0): R;
    process<R = void>(): R;
    processChildren_startingAtIndex<R = void, P0 = unknown, P1 = number>(_processChildren: P0, _startingAtIndex: P1): R;
    processChildren<R = void, P0 = unknown>(_processChildren: P0): R;
    processChild_index<R = number, P0 = unknown, P1 = number>(_processChild: P0, _index: P1): R;
    processIdentifier<R = void, P0 = unknown>(_processIdentifier: P0): R;
    processSelf<R = void, P0 = unknown>(_processSelf: P0): R;
    initWithImporter_xml<R = unknown, P0 = unknown, P1 = unknown>(_initWithImporter: P0, _xml: P1): R;
    importer<R = SVGImporter>(): R;
    setImporter<R = void, P0 = SVGImporter>(_v: P0): R;
    xml<R = NSXMLElement>(): R;
    setXml<R = void, P0 = NSXMLElement>(_v: P0): R;
    effectiveLayerName<R = NSString>(): R;
  }
  namespace SVGElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGElement {
      alloc<R = SVGElement>(): R;
      new: <R = SVGElement>() => R;
      elementOfType_xml_importer_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_elementOfType: P0, _xml: P1, _importer: P2, _parent: P3): R;
    }
  }
}

declare const SVGElement: cocoa.SVGElement.CLASS;
