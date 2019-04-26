/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppleScript<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    executeAppleEvent_error<R = unknown, P0 = unknown, P1 = unknown>(_executeAppleEvent: P0, _error: P1): R;
    executeAndReturnError<R = unknown, P0 = unknown>(_executeAndReturnError: P0): R;
    compileAndReturnError<R = boolean, P0 = unknown>(_compileAndReturnError: P0): R;
    dealloc<R = void>(): R;
    initWithSource<R = unknown, P0 = unknown>(_initWithSource: P0): R;
    initWithContentsOfURL_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithContentsOfURL: P0, _error: P1): R;
    _initWithContentsOfFile_error<R = unknown, P0 = unknown, P1 = unknown>(__initWithContentsOfFile: P0, _error: P1): R;
    _initWithScriptIDNoCopy<R = unknown, P0 = number>(__initWithScriptIDNoCopy: P0): R;
    _executeAppleEvent_withMode_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(__executeAppleEvent: P0, _withMode: P1, _error: P2): R;
    _executeWithMode_andReturnError<R = unknown, P0 = number, P1 = unknown>(__executeWithMode: P0, _andReturnError: P1): R;
    _initWithData_error<R = unknown, P0 = unknown, P1 = unknown>(__initWithData: P0, _error: P1): R;
    _compiledScriptID<R = number>(): R;
    compiled<R = boolean>(): R;
    source<R = NSString>(): R;
    // + NSAppleScript(NSExtensions):
    richTextSource<R = NSAttributedString>(): R;
  }
  namespace NSAppleScript {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSAppleScript>(): R;
      new: <R = NSAppleScript>() => R;
      _infoForOSAError<R = unknown, P0 = number>(__infoForOSAError: P0): R;
      _defaultScriptingComponent<R = ComponentInstanceRecord>(): R;
      // + NSAppleScript(NSExtensions): 
      _attributedStringFromDescriptor<R = unknown, P0 = unknown>(__attributedStringFromDescriptor: P0): R;
    }
  }
}

declare const NSAppleScript: cocoa.NSAppleScript.CLASS;
