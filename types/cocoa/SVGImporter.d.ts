/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGImporter<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    styleAttributesForElement_defaults<R = unknown, P0 = unknown, P1 = unknown>(_styleAttributesForElement: P0, _defaults: P1): R;
    registerStylesheet<R = void, P0 = unknown>(_registerStylesheet: P0): R;
    addedDrawableElement<R = void, P0 = unknown>(_addedDrawableElement: P0): R;
    relativeURLForLink<R = unknown, P0 = unknown>(_relativeURLForLink: P0): R;
    processReferences_withElement<R = void, P0 = unknown, P1 = unknown>(_processReferences: P0, _withElement: P1): R;
    makeRecordWithIdentifier_type_target_property<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_makeRecordWithIdentifier: P0, _type: P1, _target: P2, _property: P3): R;
    addReferenceToIdentifier_type_target_property<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_addReferenceToIdentifier: P0, _type: P1, _target: P2, _property: P3): R;
    registerElementWithIdentifier_type_element<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_registerElementWithIdentifier: P0, _type: P1, _element: P2): R;
    referenceEntriesForType<R = unknown, P0 = unknown>(_referenceEntriesForType: P0): R;
    elementOfType_xml_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_elementOfType: P0, _xml: P1, _parent: P2): R;
    processFile<R = void>(): R;
    importObjectGraph<R = unknown>(): R;
    initWithXMLString<R = unknown, P0 = unknown>(_initWithXMLString: P0): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    svgNamespacePrefix<R = NSString>(): R;
    setSvgNamespacePrefix<R = void, P0 = NSString>(_v: P0): R;
    drawableElementCount<R = number>(): R;
    setDrawableElementCount<R = void, P0 = number>(_v: P0): R;
    url<R = NSURL>(): R;
    setUrl<R = void, P0 = NSURL>(_v: P0): R;
    styles<R = NSDictionary>(): R;
    setStyles<R = void, P0 = NSDictionary>(_v: P0): R;
    references<R = NSMutableDictionary>(): R;
    setReferences<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    source<R = NSString>(): R;
    setSource<R = void, P0 = NSString>(_v: P0): R;
    root<R = SVGRootElement>(): R;
    setRoot<R = void, P0 = SVGRootElement>(_v: P0): R;
    elementClasses<R = NSDictionary>(): R;
    setElementClasses<R = void, P0 = NSDictionary>(_v: P0): R;
    defaultElementClass<R = unknown>(): R;
    setDefaultElementClass<R = void, P0 = unknown>(_v: P0): R;
    scaleValue<R = number>(): R;
    setScaleValue<R = void, P0 = number>(_v: P0): R;
    documentHeight<R = number>(): R;
    documentWidth<R = number>(): R;
  }
  namespace SVGImporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = SVGImporter>(): R;
      new: <R = SVGImporter>() => R;
    }
  }
}

declare const SVGImporter: cocoa.SVGImporter.CLASS;
