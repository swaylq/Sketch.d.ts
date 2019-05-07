/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCreateCommand<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
    _newObjectForContainer_inValueForKey_withClassDescription<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__newObjectForContainer: P0, _inValueForKey: P1, _withClassDescription: P2): R;
    resolvedKeyDictionary<R = NSDictionary>(): R;
    createClassDescription<R = NSScriptClassDescription>(): R;
  }
  namespace NSCreateCommand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
      alloc<R = NSCreateCommand>(): R;
      new: <R = NSCreateCommand>() => R;
    }
  }
}

declare const NSCreateCommand: cocoa.NSCreateCommand.CLASS;
