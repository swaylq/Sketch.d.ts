/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLAttributeDeclaration<T0 = void, T1 = void, T2 = void> extends NSXMLDTDNode {
    enumerations<R = unknown>(): R;
    addEnumeration<R = void, P0 = unknown>(_addEnumeration: P0): R;
    defaultType<R = number>(): R;
    setDefaultType<R = void, P0 = number>(_setDefaultType: P0): R;
    elementName<R = unknown>(): R;
    setElementName<R = void, P0 = unknown>(_setElementName: P0): R;
  }
  namespace NSXMLAttributeDeclaration {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXMLDTDNode {
      alloc<R = NSXMLAttributeDeclaration>(): R;
      new: <R = NSXMLAttributeDeclaration>() => R;
    }
  }
}

declare const NSXMLAttributeDeclaration: cocoa.NSXMLAttributeDeclaration.CLASS;
