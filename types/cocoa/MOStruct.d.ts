/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOStruct<T0 = void, T1 = void, T2 = void> extends NSObject {
    initWithName_memberNames<R = unknown, P0 = NSString, P1 = NSArray>(_initWithName: P0, _memberNames: P1): R;
    objectForMemberName<R = unknown, P0 = NSString>(_objectForMemberName: P0): R;
    setObject_forMemberName<R = void, P0 = unknown, P1 = NSString>(_setObject: P0, _forMemberName: P1): R;
    name<R = NSString>(): R;
    memberNames<R = NSArray>(): R;
  }
  namespace MOStruct {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOStruct>(): R;
      new: <R = MOStruct>() => R;
      structureWithName_memberNames<R = MOStruct, P0 = NSString, P1 = NSArray>(_structureWithName: P0, _memberNames: P1): R;
    }
  }
}

declare const MOStruct: cocoa.MOStruct.CLASS;
