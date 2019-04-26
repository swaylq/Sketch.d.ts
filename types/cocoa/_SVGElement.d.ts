/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGElement<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    primitiveSetParent<R = void, P0 = unknown>(_primitiveSetParent: P0): R;
    primitiveRemoveLinkedObject<R = void, P0 = unknown>(_primitiveRemoveLinkedObject: P0): R;
    primitiveAddLinkedObject<R = void, P0 = unknown>(_primitiveAddLinkedObject: P0): R;
    removeLinkedObject<R = void, P0 = unknown>(_removeLinkedObject: P0): R;
    addLinkedObject<R = void, P0 = unknown>(_addLinkedObject: P0): R;
    primitiveRemoveChildrenObject<R = void, P0 = unknown>(_primitiveRemoveChildrenObject: P0): R;
    primitiveAddChildrenObject<R = void, P0 = unknown>(_primitiveAddChildrenObject: P0): R;
    removeChildrenObject<R = void, P0 = unknown>(_removeChildrenObject: P0): R;
    addChildrenObject<R = void, P0 = unknown>(_addChildrenObject: P0): R;
    type<R = NSString>(): R;
    setType<R = void, P0 = NSString>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    index<R = number>(): R;
    setIndex<R = void, P0 = number>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    desc<R = NSString>(): R;
    setDesc<R = void, P0 = NSString>(_v: P0): R;
    parent<R = SVGElement>(): R;
    setParent<R = void, P0 = SVGElement>(_v: P0): R;
    linked<R = NSSet>(): R;
    setLinked<R = void, P0 = NSSet>(_v: P0): R;
    children<R = NSSet>(): R;
    setChildren<R = void, P0 = NSSet>(_v: P0): R;
  }
  namespace _SVGElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _SVGElement>(): R;
      new: <R = _SVGElement>() => R;
      attributeNames<R = unknown>(): R;
      relationshipNames<R = unknown>(): R;
      propertyNames<R = unknown>(): R;
    }
  }
}
