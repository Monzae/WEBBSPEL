using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class BreathCounter : MonoBehaviour
{

    public Vector3 start;
    public Vector3 end;
    public float totalTime;
    Deathscript deathScript;
    Image image;
    void Start()
    {
        image = GetComponent<Image>();
        this.deathScript = GetComponentInParent<Deathscript>();
        image.enabled = false;
    }


    void Update()
    {
        if (this.deathScript.waterState == WaterState.inWater)
        {
            image.enabled = true;
          StartCoroutine("BreathBarScale");
        }
        else if (this.deathScript.waterState == WaterState.notInWater)
        {
            image.enabled = false;
            StopCoroutine("BreathBarScale");
        }
    }




    IEnumerator BreathBarScale()
    {
        float t = 0;
        do
        {
            gameObject.transform.localScale = Vector3.Lerp(new Vector3(1, 1, 1), new Vector3(0, 1, 1), t / totalTime);
            yield return null;
            t += Time.deltaTime;
        }
        while (t < totalTime);
        gameObject.transform.localScale = end;
        yield break;
    }
}
