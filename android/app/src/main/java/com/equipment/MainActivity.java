package com.equipment;

import com.facebook.react.ReactActivity;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;
//引入获取机型信息的包
import com.learnium.RNDeviceInfo.RNDeviceInfo;

public class MainActivity extends ReactActivity {


	/**
    * Override the getJSBundleFile method in order to let
    * the CodePush runtime determine where to get the JS
    * bundle location from on each app start
    */
    @Override
    protected String getJSBundleFile(){
        return CodePush.getBundleUrl();
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "equipment";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
        	new RNDeviceInfo(),
            new MainReactPackage(),
            //new CodePush()
            new CodePush("cqEK3QF38d0n5Cq9fPi0YIBdgnRG414g1HcRe",this,BuildConfig.DEBUG)
        );
    }
}
