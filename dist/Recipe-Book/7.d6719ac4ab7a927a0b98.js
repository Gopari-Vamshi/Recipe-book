(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7Lvj":function(e,t,i){"use strict";i.r(t),i.d(t,"RecipesModule",(function(){return A}));var r=i("tyNb"),n=i("ofXK"),c=i("3Pt+"),o=i("fXoL");let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipes"]],decls:6,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(o.Kb(0,"div",0),o.Kb(1,"div",1),o.Ib(2,"app-recipe-list"),o.Jb(),o.Kb(3,"div",2),o.Ib(4,"br"),o.Ib(5,"router-outlet"),o.Jb(),o.Jb())},styles:[""]}),e})();var b=i("ceC1"),a=i("GXvH");const p=function(e){return[e]};let d=(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:9,vars:9,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-light"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(e,t){1&e&&(o.Kb(0,"a",0),o.Kb(1,"div",1),o.Kb(2,"h4",2),o.kc(3),o.Wb(4,"titlecase"),o.Jb(),o.Kb(5,"p",3),o.kc(6),o.Jb(),o.Jb(),o.Kb(7,"span",4),o.Ib(8,"img",5),o.Jb(),o.Jb()),2&e&&(o.Yb("routerLink",o.ac(7,p,t.index)),o.xb(3),o.lc(o.Xb(4,5,t.recipe.name)),o.xb(3),o.lc(t.recipe.description),o.xb(2),o.Zb("alt",t.recipe.name),o.Yb("src",t.recipe.imagePath,o.fc))},directives:[r.f,r.e],pipes:[n.F],styles:[".active[_ngcontent-%COMP%]{background-color:#7b68ee!important}"]}),e})();function u(e,t){if(1&e&&o.Ib(0,"app-recipe-item",4),2&e){const e=t.index;o.Yb("recipe",t.$implicit)("index",e)}}let l=(()=>{class e{constructor(e,t,i,r){this.recipeService=e,this.router=t,this.route=i,this.dataStorageService=r,this.recipes=[]}ngOnInit(){this.subscription=this.recipeService.recipesChanged.subscribe(e=>{this.recipes=e}),this.recipes=this.recipeService.getRecipes(),this.dataStorageService.fetchRecipes().subscribe()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(b.a),o.Hb(r.c),o.Hb(r.a),o.Hb(a.a))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(e,t){1&e&&(o.Kb(0,"div",0),o.Kb(1,"div",1),o.Kb(2,"a",2),o.Rb("click",(function(){return t.onNewRecipe()})),o.kc(3,"New Recipe"),o.Jb(),o.Jb(),o.Jb(),o.Ib(4,"hr"),o.Kb(5,"div",0),o.Kb(6,"div",1),o.jc(7,u,1,2,"app-recipe-item",3),o.Jb(),o.Jb()),2&e&&(o.xb(7),o.Yb("ngForOf",t.recipes))},directives:[n.s,d],styles:[""]}),e})();var m=i("3V6w");function h(e,t){if(1&e&&(o.Kb(0,"li",10),o.kc(1),o.Jb()),2&e){const e=t.$implicit;o.xb(1),o.nc(" ",e.name.charAt(0).toUpperCase()+e.name.slice(1)," - ",e.amount,"")}}let g=(()=>{class e{constructor(e,t,i){this.recipeService=e,this.route=t,this.router=i}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.recipe=this.recipeService.getRecipe(this.id)})}onAddToShoppingList(){this.recipeService.addIngredientsToSL(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(b.a),o.Hb(r.a),o.Hb(r.c))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipe-detail"]],decls:31,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","450px",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-success","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(o.Kb(0,"div",0),o.Kb(1,"div",1),o.Ib(2,"br"),o.Ib(3,"img",2),o.Jb(),o.Jb(),o.Kb(4,"div",0),o.Kb(5,"div",1),o.Kb(6,"h1"),o.kc(7),o.Jb(),o.Jb(),o.Jb(),o.Kb(8,"div",0),o.Kb(9,"div",1),o.Kb(10,"div",3),o.Kb(11,"button",4),o.kc(12," Manage Recipe "),o.Ib(13,"span",5),o.Jb(),o.Kb(14,"ul",6),o.Kb(15,"li"),o.Kb(16,"a",7),o.Rb("click",(function(){return t.onAddToShoppingList()})),o.kc(17,"To Shopping List"),o.Jb(),o.Jb(),o.Kb(18,"li"),o.Kb(19,"a",7),o.Rb("click",(function(){return t.onEditRecipe()})),o.kc(20,"Edit Recipe"),o.Jb(),o.Jb(),o.Kb(21,"li"),o.Kb(22,"a",7),o.Rb("click",(function(){return t.onDeleteRecipe()})),o.kc(23,"Delete Recipe"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(24,"div",0),o.Kb(25,"div",1),o.kc(26),o.Jb(),o.Jb(),o.Kb(27,"div",0),o.Kb(28,"div",1),o.Kb(29,"ul",8),o.jc(30,h,2,2,"li",9),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(3),o.Zb("alt",t.recipe.name),o.Yb("src",t.recipe.imagePath,o.fc),o.xb(4),o.lc(t.recipe.name),o.xb(19),o.mc(" ",t.recipe.description," "),o.xb(4),o.Yb("ngForOf",t.recipe.ingredients))},directives:[m.a,n.s],styles:[""]}),e})();class v{constructor(e,t,i,r){this.name=e,this.description=t,this.imagePath=i,this.ingredients=r}}function f(e,t){if(1&e){const e=o.Lb();o.Kb(0,"div",17),o.Kb(1,"div",18),o.Ib(2,"input",19),o.Jb(),o.Kb(3,"div",20),o.Ib(4,"input",21),o.Jb(),o.Kb(5,"div",20),o.Kb(6,"button",22),o.Rb("click",(function(){o.ec(e);const i=t.index;return o.Vb().onDeleteIngredient(i)})),o.kc(7,"X"),o.Jb(),o.Jb(),o.Jb()}2&e&&o.Yb("formGroupName",t.index)}let J=(()=>{class e{constructor(e,t,i,r){this.route=e,this.recipeService=t,this.router=i,this.dataStorageService=r,this.editMode=!1}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.editMode=null!=e.id,this.initForm()})}onSubmit(){const e=new v(this.recipeForm.value.name,this.recipeForm.value.description,this.recipeForm.value.imagePath,this.recipeForm.value.ingredients);this.editMode?this.recipeService.updateRecipe(this.id,e):this.recipeService.addRecipe(e),this.dataStorageService.storeRecipes(),this.onCancel()}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onAddIngredient(){this.recipeForm.get("ingredients").push(new c.j({name:new c.g(null,c.C.required),amount:new c.g(null,[c.C.required,c.C.pattern(/^[.]?[0-9]+[.]?[0-9]*$/)])}))}initForm(){let e="",t="",i="",r=new c.e([]);if(this.editMode){const n=this.recipeService.getRecipe(this.id);if(e=n.name,t=n.imagePath,i=n.description,n.ingredients)for(let e of n.ingredients)r.push(new c.j({name:new c.g(e.name,c.C.required),amount:new c.g(e.amount,[c.C.required,c.C.pattern(/^[.]?[0-9]+[.]?[0-9]*$/)])}))}this.recipeForm=new c.j({name:new c.g(e,c.C.required),imagePath:new c.g(t,c.C.required),description:new c.g(i,c.C.required),ingredients:r})}onDeleteIngredient(e){this.recipeForm.get("ingredients").removeAt(e)}get controls(){return this.recipeForm.get("ingredients").controls}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(r.a),o.Hb(b.a),o.Hb(r.c),o.Hb(a.a))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipe-edit"]],decls:42,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","submit","type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["name",""],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],[1,"img-responsive",2,"max-height","450px",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["type","button",1,"btn","btn-success",3,"click"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,t){1&e&&(o.Kb(0,"div",0),o.Kb(1,"div",1),o.Kb(2,"form",2),o.Rb("ngSubmit",(function(){return t.onSubmit()})),o.Kb(3,"div",0),o.Kb(4,"div",1),o.Kb(5,"button",3),o.kc(6),o.Jb(),o.kc(7,"\xa0 "),o.Kb(8,"button",4),o.Rb("click",(function(){return t.onCancel()})),o.kc(9,"Cancel"),o.Jb(),o.Jb(),o.Jb(),o.Ib(10,"hr"),o.Kb(11,"div",0),o.Kb(12,"div",1),o.Kb(13,"div",5),o.Kb(14,"label",6),o.kc(15,"Name"),o.Jb(),o.Ib(16,"input",7,8),o.Jb(),o.Jb(),o.Jb(),o.Kb(18,"div",0),o.Kb(19,"div",1),o.Kb(20,"div",5),o.Kb(21,"label",9),o.kc(22,"Image URL"),o.Jb(),o.Ib(23,"input",10),o.Jb(),o.Jb(),o.Jb(),o.Kb(24,"div",0),o.Kb(25,"div",1),o.Ib(26,"img",11),o.Jb(),o.Jb(),o.Kb(27,"div",0),o.Kb(28,"div",1),o.Kb(29,"div",5),o.Kb(30,"label",12),o.kc(31,"Description"),o.Jb(),o.Ib(32,"textarea",13),o.Jb(),o.Jb(),o.Jb(),o.Ib(33,"hr"),o.Kb(34,"div",0),o.Kb(35,"div",1),o.Kb(36,"button",14),o.Rb("click",(function(){return t.onAddIngredient()})),o.kc(37,"Add Ingredient"),o.Jb(),o.Jb(),o.Jb(),o.Kb(38,"div",0),o.Kb(39,"div",15),o.jc(40,f,8,1,"div",16),o.Jb(),o.Jb(),o.Ib(41,"hr"),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(2),o.Yb("formGroup",t.recipeForm),o.xb(3),o.Yb("disabled",!t.recipeForm.valid),o.xb(1),o.lc(t.editMode?"Update":"Add"),o.xb(20),o.Yb("src",t.recipeForm.get("imagePath").value,o.fc),o.xb(14),o.Yb("ngForOf",t.controls))},directives:[c.E,c.q,c.k,c.c,c.p,c.i,c.f,n.s,c.l,c.u],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})(),K=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(e,t){1&e&&(o.Kb(0,"h3"),o.kc(1,"Please select a Recipe!"),o.Jb())},styles:[""]}),e})();var x=i("PCNd"),w=i("IzEk"),k=i("lJxs"),y=i("qXBG");let S=(()=>{class e{constructor(e,t){this.authService=e,this.router=t}canActivate(e,t){return this.authService.user.pipe(Object(w.a)(1),Object(k.a)(e=>!!e||this.router.createUrlTree(["/auth"])))}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(y.a),o.Ob(r.c))},e.\u0275prov=o.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),I=(()=>{class e{constructor(e,t){this.dataStorageService=e,this.recipeService=t}resolve(e,t){const i=this.recipeService.getRecipes();return 0===i.length?this.dataStorageService.fetchRecipes():i}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(a.a),o.Ob(b.a))},e.\u0275prov=o.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const R=[{path:"",component:s,canActivate:[S],children:[{path:"",component:K},{path:"new",component:J},{path:":id",component:g,resolve:[I]},{path:":id/edit",component:J,resolve:[I]}]}];let C=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[r.g.forChild(R)],r.g]}),e})();var F=i("VYMa"),O=i("zy28"),P=i("/iaH"),N=i("TWy2");let A=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[r.g,n.c,c.y,C,x.a]]}),e})();o.gc(s,[r.h,r.d,r.f,r.e,r.i,n.q,n.r,n.s,n.t,n.A,n.w,n.x,n.y,n.z,n.u,n.v,c.E,c.t,c.D,c.c,c.u,c.x,c.a,c.A,c.B,c.w,c.p,c.q,c.z,c.o,c.n,c.v,c.b,c.d,c.h,c.k,c.i,c.l,c.f,F.a,O.a,P.a,m.a,N.a,s,l,g,d,K,J],[n.b,n.G,n.p,n.k,n.E,n.g,n.C,n.F,n.d,n.f,n.i,n.j,n.l])}}]);