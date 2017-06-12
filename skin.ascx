<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="LANGUAGE" Src="~/Admin/Skins/Language.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="NAV" Src="~/Admin/Skins/Nav.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TEXT" Src="~/Admin/Skins/Text.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LEFTMENU" Src="~/Admin/Skins/LeftMenu.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKS" Src="~/Admin/Skins/Links.ascx" %>
<%@ Register TagPrefix="dnn" TagName="PRIVACY" Src="~/Admin/Skins/Privacy.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TERMS" Src="~/Admin/Skins/Terms.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="STYLES" Src="~/Admin/Skins/Styles.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKTOMOBILE" Src="~/Admin/Skins/LinkToMobileSite.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.DDRMenu.TemplateEngine" Assembly="DotNetNuke.Web.DDRMenu" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" TagName="CONTROLPANEL" Src="~/Admin/Skins/controlpanel.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Meta" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="fortyfingers" TagName="STYLEHELPER" Src="~/DesktopModules/40Fingers/SkinObjects/StyleHelper/StyleHelper.ascx" %>
<%@ Register TagPrefix="dnn" TagName="jQuery" Src="~/Admin/Skins/jQuery.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JavaScriptLibraryInclude" Src="~/admin/Skins/JavaScriptLibraryInclude.ascx" %>

<dnn:DnnJsInclude runat="server" FilePath="~/Resources/Shared/Scripts/jquery/jquery-ui.min.js" />
<dnn:DnnJsInclude ID="DnnJsInclude" runat="server" FilePath="~/Resources/Shared/scripts/knockout.js" />
<!-- Html Meta header -->
<fortyfingers:STYLEHELPER ID="headMeta1" AddToHead='<meta http-equiv="X-UA-Compatible" content="IE=edge">' runat="server" />
<fortyfingers:STYLEHELPER ID="headMeta2" AddToHead='<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">' runat="server" />
<fortyfingers:STYLEHELPER ID="STYLEHELPER2" AddCssFile="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" runat="server" />

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<fortyfingers:STYLEHELPER ID="IE_LEE9" IfBrowser="IE<9" AddJsFile="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js" runat="server" />
<fortyfingers:STYLEHELPER ID="IE_LEE9_2" IfBrowser="IE<9" AddJsFile="https://oss.maxcdn.com/respond/1.4.2/respond.min.js" runat="server" />

<div class="wrapper">

  <!-- Main Header -->
  <header class="main-header">

    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><img src="/Portals/_default/Skins/kk_Admin_Acklay/img/kulturkatalogen/kulturkatalogMinilogo.png" /></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><img src="/Portals/_default/Skins/kk_Admin_Acklay/img/kulturkatalogen/kulturkatalogen250.png" /></span>
    </a>

    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu topnavPane -->        
      <div id="topnavPane" class="topnavPane navbar-custom-menu" runat="server">            
      </div>
      <!-- Navbar Right Menu -->
      
        <div class="navbar-custom-menu">
            
            <ul id="navPane" class="navPane nav navbar-nav" >                
                <div id="testPane" class="testPane" runat="server"></div>
            </ul>

        </div>
    </nav>
  </header>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <!-- SidebarPane -->        
    <section id="sidebarPane" class="sidebar sidebarPane" runat="server">
    </section>        
    <section class="sidebar">  
      <!--meny -->
           
        <!--meny end -->
            
        </section>
    <!-- /.sidebar -->
  </aside>
    
<!-- ################################################################################################ -->
   
    <!-- Content Wrapper. Contains page content -->
          
        <div id="ContentPane" class="contentPane content-wrapper" runat="server"></div>
    
    <!-- /.content-wrapper -->
   
<!-- ################################################################################################ -->
   
  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="pull-right hidden-xs">
         <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
      Utvecklare: Andreas Josefsson
    </div>
    <!-- Default to the left -->
    <strong><dnn:COPYRIGHT ID="dnnCopyright" runat="server" /></strong>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Create the tabs -->
    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
      <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-users"></i></a></li>
      <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <!-- Home tab content -->
      <div class="tab-pane active" id="control-sidebar-home-tab">        

        <h3 class="control-sidebar-heading">Anv&auml;ndare</h3>
        <ul class="control-sidebar-menu">
          <li>
            <a href="#">Andreas Josefsson</a>
          </li>
        <li> 
            <dnn:MENU ID="MENU1" MenuStyle="Simple" runat="Server" />
            <dnn:LOGIN ID="LOGIN2" CssClass="loginbox" runat="server" Text="Logga in" LegacyMode="false" />
        </li>
        </ul>
        <!-- /.control-sidebar-menu -->

      </div>
      <!-- /.tab-pane -->
      <!-- Stats tab content -->
      <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
      <!-- /.tab-pane -->
      <!-- Settings tab content -->
      <div class="tab-pane" id="control-sidebar-settings-tab">
          <h3 class="control-sidebar-heading">Roller</h3>
          <ul class="control-sidebar-menu">
              <li>
                  <a href="#">Administrat&ouml;r</a>
              </li>
              <li>
                  <a href="#">Samordnare</a>
              </li>
              <li>
                  <a href="#">Arrang&ouml;r</a>
              </li>
          </ul>
      </div>
      <!-- /.tab-pane -->
    </div>
  </aside>
  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>
    <span id="kk_aj_CurrentUserid" class="kk_aj_CurrentUserid"><%= UserController.Instance.GetCurrentUserInfo().UserID%></span>
    
</div>

<dnn:JQUERY ID="dnnjQuery" runat="server" />

<fortyfingers:STYLEHELPER ID="Bootstrap_js" AddJsFile="bootstrap/js/bootstrap.min.js" runat="server" />
<fortyfingers:STYLEHELPER ID="STYLEHELPER1" AddJsFile="public/js/kk_aj_bundle.js" runat="server" />


<script type="text/javascript">
    jQuery(document).ready(function ($) {
        $('body').addClass('hold-transition skin-black sidebar-mini');
    //    var clients = [
    //{ "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
    //{ "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
    //{ "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
    //{ "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
    //{ "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
    //    ];

    //    var countries = [
    //        { Name: "", Id: 0 },
    //        { Name: "United States", Id: 1 },
    //        { Name: "Canada", Id: 2 },
    //        { Name: "United Kingdom", Id: 3 }
    //    ];
    //    $("#jsGrid").jsGrid({
    //        width: "100%",
    //        height: "400px",

    //        inserting: true,
    //        editing: true,
    //        sorting: true,
    //        paging: true,

    //        data: clients,

    //        fields: [
    //            { name: "Name", type: "text", width: 150, validate: "required" },
    //            { name: "Age", type: "number", width: 50 },
    //            { name: "Address", type: "text", width: 200 },
    //            { name: "Country", type: "select", items: countries, valueField: "Id", textField: "Name" },
    //            { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
    //            { type: "control" }
    //        ]
    //    });
        
    });
</script>
<dnn:SEARCH ID="dnnSearch2" runat="server" ShowSite="false" ShowWeb="false" EnableTheming="true" Submit="Search" CssClass="SearchButton" Visible="false" />
                   