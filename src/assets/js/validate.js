export const validate = {
  regexp:{
    telephone : /^((0\d{2,3}-\d{7,8})(-\d{1,4})?|(1[34578]\d{9}))$/,
    mobile :/^(1\d{10})$/,
    income : /^\d+$/,
    cardId : /(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    birth : /^(\d{4})(\d){2}(\d){2}$/,
    zh : /^[\u4e00-\u9fa5]+$/,
    companyName : /^[\u4e00-\u9fa5a-zA-Z0-9()]+$/,
    fullname : /^[\u4E00-\u9FA5]{2,5}(?:[•·][\u4E00-\u9FA5]{2,5})*$/,
    carNumber : /^[a-zA-Z0-9]+$/,
    car17:/^[a-zA-Z0-9]{17}$/,
    card18:/^[a-zA-Z0-9]{18}$/,
    integer:/^[0-9]*[1-9][0-9]*$/,  //正整数
    natural:/^\d+$/  //自然数 非负整数
  },
  validateInfo : "",
  //正整数
  integer(value){
    if(this.regexp.integer.test(value)){
      return true;
    }else{
      this.validateInfo = '请填写整数';
      return false;
    }
  },
  //自然数
  natural(value){
    if(this.regexp.natural.test(value)){
      return true;
    }else{
      this.validateInfo = '请填写非负整数';
      return false;
    }
  },
  //身份证号
  cardId(value){
    if(this.regexp.cardId.test(value)){
      return true;
    }else{
      this.validateInfo = '请填写正确的身份证号';
      return false;
    }
  },
  //手机号
  mobile(value){
    if(this.regexp.mobile.test(value)){
      return true;
    }else{
      this.validateInfo = '请填写正确的手机号';
      return false;
    }
  },
  //电话号码
  telephone(value){
    if(this.regexp.telephone.test(value)){
      return true;
    }else{
      this.validateInfo = '请填写正确的电话号码';
      return false;
    }
  },
  //姓名
  fullName(value){
    if(this.regexp.fullname.test(value)){
      return true;
    }else{
      this.validateInfo = '请填写正确的姓名';
      return false;
    }
  },
};
