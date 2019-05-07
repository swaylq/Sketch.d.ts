/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNull<T0 = void, T1 = void, T2 = void> {
    // + NSNull(NSAccessibility): 
    accessibilityDidEndScrolling<R = void>(): R;
    // + NSNull(NSKeyValueCoding): 
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    // + NSNull(NSNull): 
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    // + NSNull(NSNullPortCoding): 
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    // + NSNull(NSScriptAppleEventConversion): 
    _scriptingNullDescriptor<R = unknown>(): R;
    // + NSNull(NSScriptingInternalCommandHandling): 
    _scriptingCanHandleCommand<R = boolean, P0 = unknown>(__scriptingCanHandleCommand: P0): R;
    _scriptingMightHandleCommand<R = boolean, P0 = unknown>(__scriptingMightHandleCommand: P0): R;
    // + NSNull(NSScriptingInternalCounting): 
    _scriptingCountOfValueForKey<R = number, P0 = unknown>(__scriptingCountOfValueForKey: P0): R;
    _scriptingCount<R = number>(): R;
    // + NSNull(NSScriptingInternalDeleting): 
    _scriptingRemoveValueForSpecifier<R = void, P0 = unknown>(__scriptingRemoveValueForSpecifier: P0): R;
    // + NSNull(NSScriptingInternalExisting): 
    _scriptingExists<R = boolean>(): R;
    // + NSNull(NSScriptingInternalSetting): 
    _scriptingSetValue_forSpecifier<R = unknown, P0 = unknown, P1 = unknown>(__scriptingSetValue: P0, _forSpecifier: P1): R;
  }
  namespace NSNull {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSNull(NSScriptAppleEventConversion): 
      scriptingMissingValueWithDescriptor<R = unknown, P0 = unknown>(_scriptingMissingValueWithDescriptor: P0): R;
    }
  }
}

declare const NSNull: cocoa.NSNull.CLASS;
