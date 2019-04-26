/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSparkleLicensedUpdateChecker<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    isUpdateInstalled<R = boolean, P0 = unknown>(_isUpdateInstalled: P0): R;
    compareBuildNumber_to<R = number, P0 = unknown, P1 = unknown>(_compareBuildNumber: P0, _to: P1): R;
    sparkleShortVersionForItem<R = unknown, P0 = unknown>(_sparkleShortVersionForItem: P0): R;
    sparkleVersionForItem<R = unknown, P0 = unknown>(_sparkleVersionForItem: P0): R;
    supportDateForItem<R = unknown, P0 = unknown>(_supportDateForItem: P0): R;
    supportDateStringForItem<R = unknown, P0 = unknown>(_supportDateStringForItem: P0): R;
    parseAppcastResults<R = void, P0 = unknown>(_parseAppcastResults: P0): R;
    isUpdateItemSupportedByOSVersion<R = boolean, P0 = unknown>(_isUpdateItemSupportedByOSVersion: P0): R;
    isUpdateItemSupportedByLicense<R = boolean, P0 = unknown>(_isUpdateItemSupportedByLicense: P0): R;
    initWithLicenseExpirationDate_buildNumber<R = unknown, P0 = unknown, P1 = unknown>(_initWithLicenseExpirationDate: P0, _buildNumber: P1): R;
    buildNumber<R = NSString>(): R;
    expiryDate<R = NSDate>(): R;
    indexOfBestUpdate<R = number>(): R;
    latestUnavailableBuildNumberBeforeUpdatingMacAndRenewing<R = NSString>(): R;
    latestUnavailableVersionBeforeUpdatingMacAndRenewing<R = NSString>(): R;
    latestUnavailableBuildNumberBeforeUpdatingMac<R = NSString>(): R;
    latestUnavailableVersionBeforeUpdatingMac<R = NSString>(): R;
    latestUnavailableBuildNumberBeforeRenewing<R = NSString>(): R;
    latestUnavailableVersionBeforeRenewing<R = NSString>(): R;
    latestUnavailableBuildNumber<R = NSString>(): R;
    latestUnavailableVersion<R = NSString>(): R;
    numberOfUpdatesRequiringHostUpdateAndRenewal<R = number>(): R;
    setNumberOfUpdatesRequiringHostUpdateAndRenewal<R = void, P0 = number>(_v: P0): R;
    numberOfUpdatesRequiringHostUpdate<R = number>(): R;
    setNumberOfUpdatesRequiringHostUpdate<R = void, P0 = number>(_v: P0): R;
    numberOfUpdatesRequiringRenewal<R = number>(): R;
    setNumberOfUpdatesRequiringRenewal<R = void, P0 = number>(_v: P0): R;
    hasAvailableUpdates<R = boolean>(): R;
    numberOfUnavailableReleases<R = number>(): R;
  }
  namespace BCSparkleLicensedUpdateChecker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCSparkleLicensedUpdateChecker>(): R;
      new: <R = BCSparkleLicensedUpdateChecker>() => R;
      systemVersionString<R = unknown>(): R;
      sparkleCheckerWithLicenseExpirationDate_buildNumber_appcastResults<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_sparkleCheckerWithLicenseExpirationDate: P0, _buildNumber: P1, _appcastResults: P2): R;
    }
  }
}

declare const BCSparkleLicensedUpdateChecker: cocoa.BCSparkleLicensedUpdateChecker.CLASS;
