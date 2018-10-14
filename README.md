# apidoc-plugin-example

Generates and inject [apidoc](http://apidocjs.com/) example elements from api schemas or files.

`@apiExample {SCHEMA_TYPE=PATH_TO_SCHEMA} ELEMENT_TYPE TITLE`

## Install
`npm install apidoc-plugin-example --save-dev`

## Supported Schema Types
### json
Prettifies JSON and injects in.

### [jsonschema](https://json-schema.org)
Uses [json-schema-faker](https://github.com/json-schema-faker/json-schema-faker) to generate a sample response.


## Example Use
```javascript
/**
 * @api {get} /api GetAPI
 * @apiExample {json=./ex/api.req.json} apiParamExample Request
 * @apiExample {jsonschema=./ex/api.res.json} apiSuccessExample Response JSON
 * @apiExample {xml=./ex/api.res.xml} apiSuccessExample Response XML
 */
```

## Developer Note
This plugin uses `parser-find-elements` @ priority `201`.

## TODO
- Add in wsdl schema / XSD
