/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOProtocolDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    addClassMethod_required<R = void, P0 = MOMethodDescription, P1 = boolean>(_addClassMethod: P0, _required: P1): R;
    addInstanceMethod_required<R = void, P0 = MOMethodDescription, P1 = boolean>(_addInstanceMethod: P0, _required: P1): R;
    addProperty_required<R = void, P0 = MOPropertyDescription, P1 = boolean>(_addProperty: P0, _required: P1): R;
    addProtocol<R = void, P0 = MOProtocolDescription>(_addProtocol: P0): R;
    name<R = NSString>(): R;
    requiredClassMethods<R = NSArray>(): R;
    optionalClassMethods<R = NSArray>(): R;
    requiredInstanceMethods<R = NSArray>(): R;
    optionalInstanceMethods<R = NSArray>(): R;
    properties<R = NSArray>(): R;
    protocols<R = NSArray>(): R;
    // + MOProtocolDescription(MOProtocolDescription):
    protocol<R = Protocol>(): R;
  }
  namespace MOProtocolDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOProtocolDescription>(): R;
      new: <R = MOProtocolDescription>() => R;
      descriptionForProtocol<R = MOProtocolDescription, P0 = Protocol>(_descriptionForProtocol: P0): R;
      descriptionForProtocolWithName<R = MOProtocolDescription, P0 = NSString>(_descriptionForProtocolWithName: P0): R;
      allocateDescriptionForProtocolWithName<R = MOProtocolDescription, P0 = NSString>(_allocateDescriptionForProtocolWithName: P0): R;
  
  }
  }
}

declare const MOProtocolDescription: cocoa.MOProtocolDescription.CLASS;
