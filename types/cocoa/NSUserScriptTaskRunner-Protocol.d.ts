/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserScriptTaskRunnerProtocol<T0 = void, T1 = void, T2 = void> {
    executeScript_interpreter_arguments_standardInput_standardOutput_standardError_showingProgress<R = void, P0 = NSFileHandle, P1 = NSString, P2 = NSArray, P3 = NSFileHandle, P4 = NSFileHandle, P5 = NSFileHandle, P6 = boolean>(_executeScript: P0, _interpreter: P1, _arguments: P2, _standardInput: P3, _standardOutput: P4, _standardError: P5, _showingProgress: P6): R;
  }
  namespace NSUserScriptTaskRunnerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
