import Joi from "joi";
export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const BridgeSpec = Joi.object()
  .keys({
    name: Joi.string().example("Winnies").required(),
    latitude: Joi.number().example(22.22).required(),
    longitude: Joi.number().example(-12.32).required(),
    description: Joi.string().example("A lovely shop").required(),
    countryid: IdSpec,
    })
  .label("Bridge");

  export const CountrySpec = Joi.object()
  .keys({
    country: Joi.string().example("Waterford City RFC").required(),
    userid: IdSpec,
  })
  .label("Country");