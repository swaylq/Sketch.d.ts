/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutRuleProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSCopyingProtocol {
    makeChildRules<R = NSArray>(): R;
    ruleDescription<R = NSString>(): R;
    identifier<R = NSString>(): R;
  }
  namespace NSLayoutRuleProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSCopyingProtocol {}
  }
}
