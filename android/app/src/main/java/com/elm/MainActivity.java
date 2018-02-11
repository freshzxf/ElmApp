package com.elm;

import android.os.Bundle; //1.导入android.os打包

import com.facebook.react.ReactActivity;
import com.cboy.rn.splashscreen.SplashScreen; //2.导入屏包

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Elm";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) { //3.显示启动的方法（先显示SplashaScreen）
        SplashScreen.show(this,true);
        super.onCreate(savedInstanceState);
    }
}
