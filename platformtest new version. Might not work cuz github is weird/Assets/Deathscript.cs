using UnityEngine;
using System.Collections;

public class Deathscript : MonoBehaviour
{

    void OnTriggerEnter2D(Collider2D collision)
    {

        if (collision.gameObject.tag == "KillCollider")
        {
            StartCoroutine(DieAndRespawn());
            StartCoroutine(SpawnImmortalityVisuals());
        }
    }

    void OnTriggerStay2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "KillCollider")
        {
            StartCoroutine(DieAndRespawn());
            StartCoroutine(SpawnImmortalityVisuals());
        }
    }

    GameObject[] spawnPoints;
    EdgeCollider2D deathCollider;
    Renderer rendParent;
    //Rigidbody2D rigidParent;
    //Player1Movement P1Movement;
    //Player2Movement p2Movement;


    void Start()
    {
        this.rendParent = GetComponentInParent<Renderer>();
        this.deathCollider = GetComponent<EdgeCollider2D>();
        //this.rigidParent = GetComponentInParent<Rigidbody2D>();
        //this.P1Movement = GetComponentInParent<Player1Movement>();
        //this.p2Movement = GetComponentInParent<Player2Movement>();
    }

    // Update is called once per frame
    void Update()
    {

    }

    IEnumerator DieAndRespawn()
    {
        //rendParent.enabled = false;
        //rigidParent.isKinematic = true;
        //RandomSpawn();
        //if (gameObject.tag == "P1DeathCollider")
        //    P1Movement.enabled = false;
        //if (gameObject.tag == "P2DeathCollider")
        //    p2Movement.enabled = false;
        //yield return new WaitForSeconds(2.0f);
        //rendParent.enabled = true;
        //rigidParent.isKinematic = false;
        //if (gameObject.tag == "P1DeathCollider")
        //    P1Movement.enabled = true;
        //if (gameObject.tag == "P2DeathCollider")
        //    p2Movement.enabled = true;

        RandomSpawn();
        deathCollider.enabled = false;
        yield return new WaitForSeconds(2.0f);
        deathCollider.enabled = true;


    }
    void RandomSpawn()
    {
        spawnPoints = GameObject.FindGameObjectsWithTag("Respawn");
        int  index = Random.Range(0, spawnPoints.Length);
        transform.parent.position = spawnPoints[index].transform.position;
        

    }
    IEnumerator SpawnImmortalityVisuals()
    {
        for (int i = 0; i < 5; i++)
        {
            rendParent.enabled = false;
            yield return new WaitForSeconds(0.2f);
            rendParent.enabled = true;
            yield return new WaitForSeconds(0.2f);
        }
       
    }
}
