const templateUrlRegex = /templateUrl\s*:(\s*['"`](.*?)['"`]\s*)/gm;
const stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;
const stringRegex = /(['`"])((?:[^\\]\\\1|.)*?)\1/g;

module.exports.translate = function(load) {
  let url = document.createElement('a');
  url.href = load.address;

  let basePathParts = url.pathname.split('/');

  basePathParts.pop();
  let basePath = basePathParts.join('/');

  let baseHref = document.createElement('a');
  baseHref.href = this.baseURL;
  baseHref = baseHref.pathname;

  basePath = basePath.replace(baseHref, '');

  load.source = load.source
    .replace(templateUrlRegex, function(match, quote, url) {
      let resolvedUrl;

      if (url.startsWith('.')) {
        resolvedUrl = basePath + url.substr(1);
      } else {
        resolvedUrl = basePath + '/' + url;
      }

      return 'templateUrl: "' + resolvedUrl + '"';
    })
    .replace(stylesRegex, function(match, relativeUrls) {
      let urls = [];

      while ((match = stringRegex.exec(relativeUrls)) !== null) {
        let resolvedUrl;
        if (match[2].startsWith('.')) {
          resolvedUrl = basePath + match[2].substr(1);
        } else {
          resolvedUrl = basePath + '/' + match[2];
        }
        urls.push('"' + resolvedUrl + '"');
      }

      return "styleUrls: [" + urls.join(', ') + "]";
    });

  return load;
};
