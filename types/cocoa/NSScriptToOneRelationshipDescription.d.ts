/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptToOneRelationshipDescription<T0 = void, T1 = void, T2 = void> extends NSScriptAttributeDescription {
    shouldBecomeAETEPropertyDeclaration<R = boolean>(): R;
  }
  namespace NSScriptToOneRelationshipDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptAttributeDescription {
      alloc<R = NSScriptToOneRelationshipDescription>(): R;
      new: <R = NSScriptToOneRelationshipDescription>() => R;
    }
  }
}

declare const NSScriptToOneRelationshipDescription: cocoa.NSScriptToOneRelationshipDescription.CLASS;
