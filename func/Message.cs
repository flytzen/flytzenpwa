namespace func;

public class Message
{
    private readonly ILogger _logger;

    public Message(ILoggerFactory loggerFactory)
    {
        _logger = loggerFactory.CreateLogger<Message>();
    }

    [Function("Message")]
    public HttpResponseData Run([HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequestData req)
    {
        _logger.LogInformation("C# HTTP trigger function processed a request.");

        var response = req.CreateResponse(HttpStatusCode.OK);
        response.Headers.Add("Content-Type", "text/plain; charset=utf-8");

        response.WriteString("Welcome to Azure Functions!");

        return response;
    }
}
