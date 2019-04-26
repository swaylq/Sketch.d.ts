/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSManagedObjectContext<T0 = void, T1 = void, T2 = void> {
    // + NSManagedObjectContext(NSEditorAndEditorRegistrationConformance):
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSManagedObjectContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSManagedObjectContext: cocoa.NSManagedObjectContext.CLASS;
