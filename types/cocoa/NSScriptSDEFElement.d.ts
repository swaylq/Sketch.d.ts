/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptSDEFElement<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    oneOrMoreDescriptionsForSubelementName<R = unknown, P0 = unknown>(_oneOrMoreDescriptionsForSubelementName: P0): R;
    zeroOrMoreDescriptionsForSubelementName<R = unknown, P0 = unknown>(_zeroOrMoreDescriptionsForSubelementName: P0): R;
    descriptionForOptionalSubelementName<R = unknown, P0 = unknown>(_descriptionForOptionalSubelementName: P0): R;
    valueForRequiredAttributeKey<R = unknown, P0 = unknown>(_valueForRequiredAttributeKey: P0): R;
    valueForOptionalAttributeKey<R = unknown, P0 = unknown>(_valueForOptionalAttributeKey: P0): R;
    attributes<R = unknown>(): R;
    name<R = unknown>(): R;
    addDescription_forSubelementName<R = void, P0 = unknown, P1 = unknown>(_addDescription: P0, _forSubelementName: P1): R;
    dealloc<R = void>(): R;
    initWithName_attributes<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _attributes: P1): R;
  }
  namespace NSScriptSDEFElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptSDEFElement>(): R;
      new: <R = NSScriptSDEFElement>() => R;
    }
  }
}

declare const NSScriptSDEFElement: cocoa.NSScriptSDEFElement.CLASS;
